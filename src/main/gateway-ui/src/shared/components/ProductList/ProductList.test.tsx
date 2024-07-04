import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductList from "./ProductList";

describe("<ProductList />", () => {
  test("it should mount", () => {
    render(<ProductList />);

    const ProductListElement = screen.getByTestId("ProductList");

    expect(ProductList).toBeInTheDocument();
  });
});
