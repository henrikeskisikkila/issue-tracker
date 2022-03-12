import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Link } from "../components/Link";

export default {
  title: "Components/Link",
  component: Link,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Link",
  link: "#",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Link",
  link: "#",
};

export const Hover = Template.bind({});
Hover.args = {
  hover: true,
  label: "Link",
  link: "#",
};
