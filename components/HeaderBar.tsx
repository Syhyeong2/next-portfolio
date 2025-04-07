"use client";
import { useState, useEffect } from "react";
import ThemeBtn from "./themeBtn";

export default function HeaderBar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Initialize theme state based on system preference or localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    setIsDarkMode(savedTheme === "dark");

    // Apply theme to document
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    // Update localStorage and document theme when isDarkMode changes
    const theme = isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDarkMode]);

  return (
    <div className="flex justify-center items-center gap-2">
      <div className="btn btn-outline text-xl font-extrabold border-2 rounded-xl btn-sm">
        A
      </div>
      <div className="btn btn-outline text-xl font-extrabold border-2 rounded-xl btn-sm">
        あ
      </div>
      <div className="btn btn-outline text-xl font-extrabold border-2 rounded-xl btn-sm">
        가
      </div>
      <ThemeBtn isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
}
