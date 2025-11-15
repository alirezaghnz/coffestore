import Input from "@/app/_components/ui/Input";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "ایمیل آدرس:",
    placeholder: "یوزر نیم وارد کنید...",
  },
};
