import React from "react";
import "./input.css";
interface InputProps {
  placeholder: string;
}

export const Input = ({ placeholder }: InputProps) => {
  return <input placeholder={placeholder} />;
};
