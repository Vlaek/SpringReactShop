import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loader from "./Loader";

describe("<Loader />", () => {
  test("it should mount", () => {
    render(<Loader />);

    const LoaderElement = screen.getByTestId("Loader");

    expect(Loader).toBeInTheDocument();
  });
});
