import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Dialog } from "components/Dialog";

export default {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  isOpen: false,
};
