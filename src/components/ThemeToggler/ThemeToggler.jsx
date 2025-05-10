import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export const ThemeToggler = ({ mode }) => {
  return <DarkModeSwitch checked={mode} size={30} />;
};
