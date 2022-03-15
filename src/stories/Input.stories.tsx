import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "components/Input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: { onChange: { action: "input" } },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: "Email",
};
