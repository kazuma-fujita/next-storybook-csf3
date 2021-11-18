import type { ComponentStoryObj } from "@storybook/react";
import { Task } from "./task";

type Story = ComponentStoryObj<typeof Task>;

export default { component: Task };

export const Default: Story = {
  args: {
    id: "1",
    title: "OK2 Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2021, 0, 10, 10, 0),
  },
};

export const Pinned: Story = {
  args: { ...Default.args, state: "TASK_PINNED" },
};

export const Archived: Story = {
  args: { ...Default.args, state: "TASK_ARCHIVED" },
};
