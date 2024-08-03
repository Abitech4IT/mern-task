import type { Meta, StoryObj } from "@storybook/react";
import TextInput from "../components/TextInput";
import CustomProvider from "../../.storybook/decorators";

const meta: Meta<typeof TextInput> = {
  title: "Global/TextInput",
  component: TextInput,
  decorators: [CustomProvider],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    title: "Profile",
    name: "profile",
    value: "1",
    size: "small",
  },
};

export const WithIcon: Story = {
  args: {
    title: "Profile",
    name: "profile",
    value: "1",
    size: "small",
  },
};
