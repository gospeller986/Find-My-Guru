"use client";
import React, { useEffect, useState } from "react";
import { TextField, Button, Autocomplete, Box } from "@mui/material";
import { Country, State, City } from "country-state-city";
import {
  AddressInterface,
  FormData,
  FormErrors,
} from "@/types/tutorOnboarding.types";
import { HighestDegree, Subjects } from "@/lib/data";

export default function Onboarding() {
  const [formData, setFormData] = useState<FormData>({
    description : "",
    address: "",
    phoneNumber: "",
    country: null,
    state: null,
    city: null,
    pincode: 0,
    subjects: [],
    highestDegree: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    description : "",
    address: "",
    phoneNumber: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    subjects: "",
    highestDegree: "",
  });

  const [countries, setCountries] = useState<AddressInterface[]>([]);
  const [states, setStates] = useState<AddressInterface[]>([]);
  const [cities, setCities] = useState<AddressInterface[]>([]);

  useEffect(() => {
    const countryOptions = Country.getAllCountries().map((country) => ({
      value: country.isoCode,
      label: country.name,
    }));
    setCountries(countryOptions);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAutocompleteChange = (
    event: React.SyntheticEvent,
    value: AddressInterface | null,
    name: string
  ) => {
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "country" && value) {
      const stateOptions = State.getStatesOfCountry(value.value).map(
        (state) => ({
          value: state.isoCode,
          label: state.name,
        })
      );
      setStates(stateOptions);
      setCities([]);
      setFormData((prev) => ({ ...prev, state: null, city: null }));
    }

    if (name === "state" && value) {
      const cityOptions = City.getCitiesOfState(
        formData?.country?.value || "",
        value.value
      ).map((city) => ({
        value: city.name,
        label: city.name,
      }));
      setCities(cityOptions);
      setFormData((prev) => ({ ...prev, city: null }));
    }
  };

  const validate = () => {
    const newErrors: FormErrors = {
      description : "",
      address: "",
      phoneNumber: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
    };
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber))
      newErrors.phoneNumber = "Enter a valid 10-digit phone number";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.city) newErrors.city = "City is required";
    if (formData?.subjects?.length === 0) {
      newErrors.subjects = "Please select at least one subject";
    }
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully:", formData);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        padding: "0 16px",
        background: "radial-gradient(#e5e7eb 1px, transparent 1px)",
        backgroundSize: "16px 16px",
        paddingBottom: 4,
      }}
    >
      <h1 className="text-3xl text-center md:text-7xl font-bold">
        Stop Searching Students
      </h1>
      <h2 className="text-xl md:text-3xl">Let Students Search You Instead</h2>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          marginTop: "16px",
          width: "100%",
          maxWidth: "600px",
          padding: 4,
        }}
        className="bg-white/40 backdrop-blur-lg-50 "
      >
        <Autocomplete
          options={HighestDegree}
          getOptionLabel={(option) => option}
          value={formData.highestDegree || ""} // Ensure value is never null
          onChange={
            (event, value) =>
              setFormData({ ...formData, highestDegree: value || "" }) // Default to empty string if value is null
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="Highest Qualification"
              margin="normal"
              error={!!errors.highestDegree}
              helperText={errors.highestDegree}
              fullWidth
            />
          )}
        />
        <Autocomplete
          multiple
          options={Subjects}
          getOptionLabel={(option) => option}
          value={formData.subjects || []}
          onChange={(event, value) =>
            setFormData({ ...formData, subjects: value })
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="Subjects Expertise"
              margin="normal"
              placeholder="You may select multiple"
              error={!!errors.subjects}
              helperText={errors.subjects}
              fullWidth
            />
          )}
        />
        <TextField
          name="description"
          value={formData.description || ""} 
          onChange={handleInputChange}
          fullWidth
          placeholder="Description"
          label="Description"
          multiline
        />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: 1,
          }}
        >
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={!!errors.address}
            helperText={errors.address}
          />
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber}
          />
          <Autocomplete
            options={countries}
            getOptionLabel={(option) => option.label}
            value={formData.country}
            fullWidth
            onChange={(e, value) =>
              handleAutocompleteChange(e, value, "country")
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Country"
                margin="normal"
                error={!!errors.country}
                helperText={errors.country}
              />
            )}
          />
          <Autocomplete
            options={states}
            getOptionLabel={(option) => option.label}
            value={formData.state}
            fullWidth
            onChange={(e, value) => handleAutocompleteChange(e, value, "state")}
            renderInput={(params) => (
              <TextField
                {...params}
                label="State"
                margin="normal"
                error={!!errors.state}
                helperText={errors.state}
              />
            )}
          />
          <Autocomplete
            options={cities}
            getOptionLabel={(option) => option.label}
            value={formData.city}
            onChange={(e, value) => handleAutocompleteChange(e, value, "city")}
            fullWidth
            renderInput={(params) => (
              <TextField
                {...params}
                label="City"
                margin="normal"
                error={!!errors.city}
                helperText={errors.city}
              />
            )}
          />
          <TextField
            label="Pin Code"
            name="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={!!errors.pincode}
            helperText={errors.pincode}
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            marginTop: "16px",
            backgroundColor: "rgb(224,241,94)",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
