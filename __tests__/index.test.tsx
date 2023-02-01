import { render, screen } from "@testing-library/react";
import Index from "../pages/index";
import "@testing-library/jest-dom";

describe("Index", () => {
  it("renders the heading", () => {
    render(<Index />);
    expect(screen.getByRole("heading")).toHaveTextContent("Hello, world.");
  });
});
