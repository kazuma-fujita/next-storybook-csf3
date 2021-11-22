import type { ComponentStoryObj } from "@storybook/react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SignInForm } from "./sign-in-form";

type Story = ComponentStoryObj<typeof SignInForm>;

export default { component: SignInForm };

export const Default: Story = {};

export const EmptyError = {
  ...Default,
  play: async () => userEvent.click(screen.getByText(/ログイン/i)),
};

export const Filled = {
  ...Default,
  play: async () => {
    userEvent.type(
      screen.getByPlaceholderText("メールアドレス"),
      "uesr@example.com"
    );
    userEvent.type(screen.getByPlaceholderText("パスワード"), "password");
  },
};

export const FilledSuccess = {
  ...Filled,
  play: async () => {
    await Filled.play();
    await EmptyError.play();
  },
};
