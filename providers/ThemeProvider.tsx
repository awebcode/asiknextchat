"use client"
import { ThemeProvider as Theme } from "next-themes";
import React, { ReactNode } from "react";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Theme themes={["pink", "red", "blue", "light", "dark"]} attribute="class">
      {children}
    </Theme>
  );
};

export default ThemeProvider;
