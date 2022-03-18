import React from "react";

interface StackProps {
  children?: React.ReactNode;
  direction?: "row" | "column";
  wrap?: "wrap" | "nowrap";
  spacing?: number;
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between";
}

export const Stack = ({
  children = null,
  direction = "row",
  wrap = "wrap",
  spacing = 2,
  justifyContent,
}: StackProps) => {
  const style2 = {
    display: "flex",
    gap: `${spacing * 0.3}rem`,
    flexWrap: wrap,
    flexDirection: direction,
    justifyContent: justifyContent,
  };

  return <div style={style2}>{children}</div>;
};
