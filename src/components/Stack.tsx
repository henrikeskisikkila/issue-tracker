import React from "react";

interface StackProps {
  children?: React.ReactNode;
  direction?: "row" | "column";
  wrap?: "wrap" | "nowrap";
  spacing?: number;
}

export const Stack = ({
  children = null,
  direction = "row",
  wrap = "wrap",
  spacing = 2,
}: StackProps) => {
  const style2 = {
    display: "flex",
    gap: `${spacing * 0.3}rem`,
    flexWrap: wrap,
    flexDirection: direction,
  };

  return <div style={style2}>{children}</div>;
};
