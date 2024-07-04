import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SeparatorLine from "./SeparatorLine";

describe("<SeparatorLine />", () => {
  test("it should mount", () => {
    render(<SeparatorLine />);

    const SeparatorLineElement = screen.getByTestId("SeparatorLine");

    expect(SeparatorLine).toBeInTheDocument();
  });
});
