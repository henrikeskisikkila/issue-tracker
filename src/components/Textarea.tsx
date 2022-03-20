import React from "react";
import "./textarea.css";

interface TextareaProps {
  placeholder: string;
  rows?: number;
  cols?: number;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea = ({ placeholder, ...props }: TextareaProps) => {
  return <textarea placeholder={placeholder} {...props} />;
};
