import React from "react";

enum Direction {
  row,
  column,
}

interface StackProps {
  children: React.ReactNode;
  direction: Direction;
  wrap: boolean;
  spacing: number;
}

export const Stack = ({
  children,
  direction = Direction.row,
  wrap = false,
  spacing = 2,
}: StackProps) => {
  const style = {
    display: "flex",
    gap: `${spacing * 0.3}rem`,
    flexWrap: "wrap" || null,
    // flexWrap: wrap ? "wrap" : "nowrap",
    // flexDirection: direction.valueOf() === Direction.row ? "row" : "column",
  };

  return <div style={style}>{children}</div>;
};
