
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

type User = {
  id ?: number | string ;
  name: string;
  email: string;
  profilePicture?: string; // Optional if users don't have profile pictures
};

type AuthContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = Cookies.get("token");
        if (token) {
          const response = await fetch("/api/auth/user", {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (response.ok) {
            const userData = await response.json();
            setUser(userData); // Update the user state with fetched data
          }
        }
      } catch (err) {
        console.error("Error fetching user details:", err);
        setUser(null);
      }
    };

    fetchUserDetails();
  }, []);

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
