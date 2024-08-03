import type { Meta, StoryObj } from "@storybook/react";
import SelectInput from "../components/SelectInput";

const meta: Meta<typeof SelectInput> = {
  title: "Global/Select-Input",
  component: SelectInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SelectInput>;

export const SelectField: Story = {
  args: {
    title: "Select your option",
    menuItems: [
      { title: "Option1", value: "option1" },
      { title: "Option2", value: "option2" },
    ],
  },
};
