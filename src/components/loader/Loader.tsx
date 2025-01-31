"use client";
import React, { useEffect, useState } from "react";

export const Loader = () => {
  const [availableHeight, setAvailableHeight] = useState<number>(0);
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
    <>
      <div
        className="h-full w-full flex justify-center items-center"
        style={{ minHeight: `${availableHeight}px` }}
      >
        <div className="loader"></div>
      </div>
    </>
  );
};
