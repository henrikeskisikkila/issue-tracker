import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Stack } from "components/Stack";

export default {
  title: "Components/Stack",
  component: Stack,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 4 },
  },
} as ComponentMeta<typeof Stack>;

interface StackProps {
  children?: React.ReactNode;
  direction?: "row" | "column";
  wrap?: "wrap" | "nowrap";
  spacing?: number;
  arg?: object;
  numberOfChildren?: number;
}

const Template: ComponentStory<typeof Stack> = ({
  numberOfChildren,
  ...args
}: StackProps) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map((n) => (
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        key={n}
      >
        {n + 1}
      </div>
    ))}
  </Stack>
);

export const Row = Template.bind({});
Row.args = {
  direction: "row",
};

export const Column = Template.bind({});
Column.args = {
  direction: "column",
};
