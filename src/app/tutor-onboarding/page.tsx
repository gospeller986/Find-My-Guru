"use client";
import React, { useEffect, useState } from "react";
import Select, { SingleValue } from "react-select";
import { Country, State, City } from "country-state-city";

interface FormErrors {
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  country: string;
  state: string;
  city: string;
  pincode : string ;
}

interface AddressInterface {
  value: string;
  label: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  country: AddressInterface | null;
  state: AddressInterface | null;
  city: AddressInterface | null;
  pincode : number ;
}

export default function Onboarding() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    country: null,
    state: null,
    city: null,
    pincode : 0 
  });

  const [errors, setErrors] = useState<FormErrors>({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    country: "",
    state: "",
    city: "",
    pincode : ""
  });
  const [countries, setCountries] = useState<AddressInterface[]>([]);
  const [states, setStates] = useState<AddressInterface[]>([]);
  const [cities, setCities] = useState<AddressInterface[]>([]);

  useEffect(() => {
    // Fetch countries and map them to the format react-select expects
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

  const handleSelectChange = (
    selectedOption: AddressInterface | null,
    actionMeta: { name?: string }
  ): void => {
    const { name } = actionMeta;

    if (name) {
      setFormData((prev) => ({ ...prev, [name]: selectedOption }));

      if (name === "country" && selectedOption) {
        const stateOptions = State.getStatesOfCountry(selectedOption.value).map(
          (state) => ({
            value: state.isoCode,
            label: state.name,
          })
        );
        setStates(stateOptions);
        setCities([]); // Reset cities
        setFormData((prev) => ({ ...prev, state: null, city: null }));
      }

      if (name === "state" && selectedOption) {
        const cityOptions = City.getCitiesOfState(
          formData?.country?.value || "",
          selectedOption.value
        ).map((city) => ({
          value: city.name,
          label: city.name,
        }));
        setCities(cityOptions);
        setFormData((prev) => ({ ...prev, city: null }));
      }
    } else {
      console.error("The 'name' field is missing in actionMeta.");
    }
  };

  const validate = () => {
    const newErrors: FormErrors = {
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      country: "",
      state: "",
      city: "",
      pincode : ''
    };
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber))
      newErrors.phoneNumber = "Enter a valid 10-digit phone number";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.city) newErrors.city = "City is required";

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
    <div className="flex flex-col px-4 mb-20 md:px-40 h-[100vh] justify-center items-center inset-0 w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] ">
      <div className="flex flex-col items-center gap-4 md:gap-8 mt-8">
        <h1 className="text-3xl text-center md:text-7xl font-bold">
          Stop Searching Students
        </h1>
        <h1 className="text-xl md:text-3xl">Let Students Search You Instead</h1>
      </div>
      <div className="h-[100%] w-[100%] md:w-[50%] relative bg-[white]/60 shadow-xl backdrop-blur-0-[20px] z-10 border border-gray-300 mt-4 rounded-2xl">
        <div className="bg-slate-100 h-20 w-full rounded-tl-2xl rounded-tr-2xl" />
        <div className="h-20 w-20 rounded-full bg-slate-500 absolute top-10 left-5 md:top-10 md:left-10 " />
        <div className="p-4 md:p-8 mt-10">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col gap-2 w-[100%]">
                <label className="text-sm font-semibold text-gray-600">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                />
                {errors.firstName && (
                  <span className="text-red-500 text-sm">
                    {errors.firstName}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2 w-[100%]">
                <label className="text-sm font-semibold text-gray-600">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                />
                {errors.lastName && (
                  <span className="text-red-500 text-sm">
                    {errors.lastName}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col gap-2 w-[100%]">
                <label className="text-sm font-semibold text-gray-600">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                />
                {errors.address && (
                  <span className="text-red-500 text-sm">{errors.address}</span>
                )}
              </div>
              <div className="flex flex-col gap-2 w-[100%]">
                <label className="text-sm font-semibold text-gray-600">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                />
                {errors.phoneNumber && (
                  <span className="text-red-500 text-sm">
                    {errors.phoneNumber}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-600">
                    Country
                  </label>
                  <Select
                    name="country"
                    options={countries}
                    value={formData.country}
                    onChange={handleSelectChange}
                    className="w-full border-2 border-gray-300 rounded-md"
                  />
                  {errors.country && (
                    <span className="text-red-500 text-sm">
                      {errors.country}
                    </span>
                  )}
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-600">
                    State
                  </label>
                  <Select
                    name="state"
                    options={states}
                    value={formData.state}
                    onChange={handleSelectChange}
                    className="w-full border-2 border-gray-300 rounded-md"
                  />
                  {errors.state && (
                    <span className="text-red-500 text-sm">{errors.state}</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-600">
                    City
                  </label>
                  <Select
                    name="city"
                    options={cities}
                    value={formData.city}
                    onChange={handleSelectChange}
                    className="w-full border-2 border-gray-300 rounded-md"
                  />
                  {errors.city && (
                    <span className="text-red-500 text-sm">{errors.city}</span>
                  )}{" "}
                </div>
                <div className="flex flex-col gap-[6.5px] w-[100%]">
                  <label className="text-sm font-semibold text-gray-600">
                    Pin Code
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className="border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                  />
                  {errors.pincode && (
                    <span className="text-red-500 text-sm">
                      {errors.pincode}
                    </span>
                  )}
                </div>
              </div>
            </div>{" "}
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
            >
              {" "}
              Submit{" "}
            </button>{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
