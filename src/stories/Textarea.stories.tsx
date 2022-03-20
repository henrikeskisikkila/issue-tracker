import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Textarea } from "components/Textarea";

export default {
  title: "Components/Textarea",
  component: Textarea,
  argTypes: { onChange: { action: "input" } },
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: "Content",
};
