import {
  Autocomplete,
  Button,
  Dialog,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import { UserProfile } from "@/interfaces/response/user-profile.response.interface";
import { AddressInterface } from "@/types/tutorOnboarding.types";
import { City, Country, State } from "country-state-city";
import axios from "axios";

interface IUserForm {
  userId: string;
  open: boolean;
  handleClose: () => void;
}

export const UserForm = ({ userId, open, handleClose }: IUserForm) => {
  const [userData, setUserData] = useState<UserProfile | null>(null);
  const [countries, setCountries] = useState<AddressInterface[]>([]);
  const [states, setStates] = useState<AddressInterface[]>([]);
  const [cities, setCities] = useState<AddressInterface[]>([]);

  const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);

  useEffect(() => {
    // Load countries once
    const countryOptions = Country.getAllCountries().map((country) => ({
      value: country.isoCode,
      label: country.name,
    }));
    setCountries(countryOptions);
  }, []);

  const handleFormSubmit = async () => {
    if (isFormSubmitting) return;
    setIsFormSubmitting(true);
    try {
      const params = {
        userId,
        name: userData?.name,
        email: userData?.email,
        country: userData?.country,
        state: userData?.state,
        city: userData?.city,
        role: userData?.role,
      };
      await axios.put(`/api/users/${userId}`, params);
    } catch (error) {
      console.error(error);
    } finally {
      setIsFormSubmitting(false);
      handleClose();
    }
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`/api/users/${userId}`);
        if (response.ok) {
          const data: UserProfile = await response.json();

          // Find the country object from stored country string
          const selectedCountry =
            countries.find((c) => c.value === data.country) || null;

          // Find the states based on country and prefill
          const stateOptions = selectedCountry
            ? State.getStatesOfCountry(selectedCountry.value).map((state) => ({
                value: state.isoCode,
                label: state.name,
              }))
            : [];
          setStates(stateOptions);

          const selectedState =
            stateOptions.find((s) => s.value === data.state) || null;

          // Find the cities based on state and prefill
          const cityOptions =
            selectedCountry && selectedState
              ? City.getCitiesOfState(
                  selectedCountry.value,
                  selectedState.value
                ).map((city) => ({
                  value: city.name,
                  label: city.name,
                }))
              : [];
          setCities(cityOptions);

          setUserData({
            ...data,
            country: selectedCountry?.value || "",
            state: selectedState?.value || "",
            city: data.city || "",
          });
        } else {
          console.error("Failed to fetch user profile");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    if (userId) fetchUserProfile();
  }, [userId, countries]);

  const handleAutocompleteChange = (
    event: React.SyntheticEvent,
    value: AddressInterface | null,
    name: string
  ) => {
    setUserData((prev) => ({
      ...prev!,
      [name]: value ? value.value : "", // Ensure string is stored
      ...(name === "country" ? { state: "", city: "" } : {}),
      ...(name === "state" ? { city: "" } : {}),
    }));

    if (name === "country" && value) {
      const stateOptions = State.getStatesOfCountry(value.value).map(
        (state) => ({
          value: state.isoCode,
          label: state.name,
        })
      );
      setStates(stateOptions);
      setCities([]);
    }

    if (name === "state" && value) {
      const cityOptions = City.getCitiesOfState(
        userData?.country || "",
        value.value
      ).map((city) => ({
        value: city.name,
        label: city.name,
      }));
      setCities(cityOptions);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm">
      <div className="flex flex-col p-8 gap-4">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-2xl font-semibold">Complete Your Profile</h1>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>

        <Divider />

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <InputLabel>Name</InputLabel>
            <TextField
              required
              margin="dense"
              id="name"
              value={userData?.name || ""}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev!,
                  name: e.target.value,
                  email: prev?.email || "", // Ensure email is always present
                  role: prev?.role || "", // Ensure role is always present
                }))
              }
              type="text"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabel>Email</InputLabel>
            <TextField
              required
              margin="dense"
              id="email"
              value={userData?.email || ""}
              type="email"
              fullWidth
              variant="standard"
              disabled
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Autocomplete
              options={countries}
              getOptionLabel={(option) => option.label}
              value={
                countries.find((c) => c.value === userData?.country) || null
              }
              fullWidth
              onChange={(e, value) =>
                handleAutocompleteChange(e, value, "country")
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Country"
                  margin="normal"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Autocomplete
              options={states}
              getOptionLabel={(option) => option.label}
              value={states.find((s) => s.value === userData?.state) || null}
              fullWidth
              onChange={(e, value) =>
                handleAutocompleteChange(e, value, "state")
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="State"
                  margin="normal"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Autocomplete
              options={cities}
              getOptionLabel={(option) => option.label}
              value={cities.find((c) => c.value === userData?.city) || null}
              fullWidth
              onChange={(e, value) =>
                handleAutocompleteChange(e, value, "city")
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="City"
                  margin="normal"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabel>Role</InputLabel>
            <FormControl
              component="fieldset"
              sx={{ display: "flex", flexDirection: "column", gap: 4 }}
            >
              <RadioGroup
                row
                value={userData?.role || "student"} // Default role is "student"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev!,
                    role: e.target.value, // Ensure role is always updated correctly
                    email: prev?.email || "", // Keep required fields
                    name: prev?.name || "",
                  }))
                }
              >
                <FormControlLabel
                  value="student"
                  control={<Radio />}
                  label="Student"
                />
                <FormControlLabel
                  value="tutor"
                  control={<Radio />}
                  label="Tutor"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        <div className="flex flex-row justify-end gap-8 mt-4">
          <Button sx={{ color: "black" }} onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "black" }}
            onClick={handleFormSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </Dialog>
  );
};
