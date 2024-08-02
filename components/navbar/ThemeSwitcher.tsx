"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={`flex relative items-center py-1 cursor-pointer justify-between w-[4rem] rounded-xl bg-primary`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Image src="/moon.png" alt="" height={20} width={20} className="ml-1" />
      <div
        className={`absolute bg-secondary w-[20px] h-[20px] rounded-full ${
          theme === "dark" ? "left-1" : "right-1"
        }`}
      />
      <Image src="/sun.png" alt="" height={20} width={20} className="mr-1" />
    </div>
  );
}

export default ThemeSwitcher;
