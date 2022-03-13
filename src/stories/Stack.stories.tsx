import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Stack } from "components/Stack";

export default {
  title: "Components/Stack",
  component: Stack,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args} />;

export const Row = Template.bind({});
Row.args = {};

export const Column = Template.bind({});
Column.args = {};
