import React from "react";
import "./input.css";

interface InputProps {
  type: "text" | "password";
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ placeholder, ...props }: InputProps) => {
  return <input placeholder={placeholder} {...props} />;
};
