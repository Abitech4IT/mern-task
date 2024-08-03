import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button";
import CustomProvider from "../../.storybook/decorators";

const meta: Meta<typeof Button> = {
  title: "Global/Button",
  component: Button,
  decorators: [CustomProvider],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    title: "yes",
    variant: "contained",
    color: "primary",
    children: "Click me",
  },
};
