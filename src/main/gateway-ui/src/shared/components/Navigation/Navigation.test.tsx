import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navigation from "./Navigation";

describe("<Navigation />", () => {
  test("it should mount", () => {
    render(<Navigation />);

    const NavigationElement = screen.getByTestId("Navigation");

    expect(Navigation).toBeInTheDocument();
  });
});
