"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Button
      className="flex justify-center items-center rounded-full fixed bottom-4 right-4 md:bottom-8 md:right-8"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {isMounted ? (
        theme === "dark" ? (
          <MdOutlineLightMode />
        ) : (
          <MdOutlineDarkMode />
        )
      ) : (
        <MdOutlineDarkMode />
      )}
    </Button>
  );
}
