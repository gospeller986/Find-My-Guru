"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Button, TextField, Typography } from "@mui/material";

export default function SigninPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [availableHeight, setAvailableHeight] = useState<number>(0);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const { error } = await res.json();
        setError(error || "Sign-in failed");
        return;
      }

      const { token } = await res.json();
      Cookies.set("token", token, { expires: 7 }); // Store token in cookies for 7 days

      router.push("/dashboard");
    } catch (err) {
      setError("An error occurred during sign-in");
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
      <h1 className="text-5xl md:text-7xl font-bold mb-8">Sign In</h1>
      <form className="flex flex-col gap-2 md:min-w-[20vw]" onSubmit={handleSubmit}>
        <TextField
          type="email"
          name="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          type="password"
          name="password"
          variant="outlined"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          fullWidth
        />
        <h1>Don't have an account ? <a href="/auth/signup" className="underline font-semibold" >Sign Up</a> </h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button
          variant="contained"
          sx={{ backgroundColor: "rgb(224,241,94)" , marginTop : 2 }}
          type="submit"
        >
          Sign In
        </Button>
      </form>
    </div>
  );
}
