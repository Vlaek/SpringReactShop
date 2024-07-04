import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TemplateName from "./TemplateName";

describe("<TemplateName />", () => {
  test("it should mount", () => {
    render(<TemplateName />);

    const TemplateNameElement = screen.getByTestId("TemplateName");

    expect(TemplateName).toBeInTheDocument();
  });
});
