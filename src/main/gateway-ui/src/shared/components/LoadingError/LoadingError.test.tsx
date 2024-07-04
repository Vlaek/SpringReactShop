import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoadingError from "./LoadingError";

describe("<LoadingError />", () => {
  test("it should mount", () => {
    render(<LoadingError />);

    const LoadingErrorElement = screen.getByTestId("LoadingError");

    expect(LoadingError).toBeInTheDocument();
  });
});
