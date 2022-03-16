import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Navigator } from "../components/Navigator";

export default {
  title: "Components/Navigator",
  component: Navigator,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Navigator>;

const Template: ComponentStory<typeof Navigator> = (args) => (
  <Navigator {...args} />
);

export const Medium = Template.bind({});
Medium.args = {
  menu: [
    {
      item: {
        label: "Projects",
      },
      subItems: [
        {
          label: "Project 1",
          link: "#",
        },
        {
          label: "Project 2",
          link: "#",
        },
      ],
    },
  ],
};

// export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   user: {
//     name: "Jane Doe",
//   },
// };

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
