"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, TextField } from "@mui/material";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [availableHeight, setAvailableHeight] = useState<number>(0);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const { error } = await res.json();
        setError(error || "Sign-up failed");
        return;
      }

      router.push("/auth/signin");
    } catch (err) {
      setError(`An error occurred during sign-up ${err}`);
    }
  };

    useEffect(() => {
      const navbar = document.querySelector(".navbar");
      const footer = document.querySelector(".footer");
  
      if (navbar && footer) {
        const navbarHeight = navbar.getBoundingClientRect().height;
        const footerHeight = footer.getBoundingClientRect().height;
        const availableHeight = window.innerHeight - navbarHeight - footerHeight;
  
        setAvailableHeight(availableHeight);
      }
  
      // Add event listener for resizing the window
      const handleResize = () => {
        const navbarHeight = navbar?.getBoundingClientRect().height || 0;
        const footerHeight = footer?.getBoundingClientRect().height || 0;
        setAvailableHeight(window.innerHeight - navbarHeight - footerHeight);
      };
  
      window.addEventListener("resize", handleResize);
  
      // Cleanup listener on component unmount
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <div
      className="flex flex-col justify-center items-center px-4 md:px-40 my-10 md:my-0"
      style={{ minHeight: `${availableHeight}px` }}
    >
      <h1 className="text-5xl md:text-7xl font-bold mb-8">Sign Up</h1>
      <form className="flex flex-col gap-2 md:min-w-[20vw]" onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <h1>Already have an account ? <a href="/auth/signin" className="underline font-semibold" >Sign In</a> </h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button sx={{ backgroundColor: "rgb(224,241,94)" , marginTop : 2 }} variant="contained" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
}
