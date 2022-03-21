import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Table } from "components/Table";

export default {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Table>;

const headers = ["Name", "Calories", "Fat", "Carbs", "Protein"];

const createData = (
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) => {
  return { name, calories, fat, carbs, protein };
};

const rows = [
  createData("Frozen yoghurt", 159.0, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  headers: headers,
  rows: rows,
};
