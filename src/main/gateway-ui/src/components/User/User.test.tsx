import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import User from "./User";
import { IUser } from "../../types";

const EMPTY_USER: IUser = {
  username: "",
  email: "",
  password: "",
  role: "user",
};

describe("<User />", () => {
  test("it should mount", () => {
    render(<User user={EMPTY_USER} />);

    const UserElement = screen.getByTestId("User");

    expect(UserElement).toBeInTheDocument();
  });
});
