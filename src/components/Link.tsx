import React from "react";
import "./link.css";

interface LinkProps {
  primary?: boolean;
  hover?: boolean;
  backgroundColor?: string;
  label: string;
  link: string;
}

export const Link = ({
  primary = false,
  hover = false,
  backgroundColor,
  label,
  link,
  ...props
}: LinkProps) => {
  const mode = primary ? "link--primary" : "link--secondary";
  const hoverable = hover ? "link--hover" : null;
  return (
    <div className={"link"}>
      <a href={link} className={`${mode} ${hoverable}`} {...props}>
        {label}{" "}
      </a>
    </div>
  );
};
