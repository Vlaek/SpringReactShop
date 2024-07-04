import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserList from "./UserList";

describe("<UserList />", () => {
  test("it should mount", () => {
    render(<UserList />);

    const UserListElement = screen.getByTestId("UserList");

    expect(UserList).toBeInTheDocument();
  });
});
