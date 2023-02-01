import { render, screen, fireEvent } from "@testing-library/react";
import CommanderDamage from "../CommanderDamage";
import "@testing-library/jest-dom";

const addLife = jest.fn();
const subtractLife = jest.fn();

describe("Index", () => {
  it("should subtract 5 commander damage when the subtract commander damage button is pressed 5 times", () => {
    render(
      <CommanderDamage
        name={"Player 1"}
        addLife={addLife}
        subtractLife={subtractLife}
      />
    );

    for (let i = 0; i < 5; i++) {
      fireEvent.click(screen.getByText("-"));
    }

    expect(addLife).toHaveBeenCalledTimes(0);
    expect(subtractLife).toHaveBeenCalledTimes(0);
    expect(screen.getByTestId("commanderdamage")).toHaveTextContent("0");
  });

  it("should add 5 commander damage when the add commander damage button is pressed 5 times", () => {
    render(
      <CommanderDamage
        name={"Player 1"}
        addLife={addLife}
        subtractLife={subtractLife}
      />
    );

    for (let i = 0; i < 5; i++) {
      fireEvent.click(screen.getByText("+"));
    }

    expect(addLife).toHaveBeenCalledTimes(0);
    expect(subtractLife).toHaveBeenCalledTimes(5);
    expect(screen.getByTestId("commanderdamage")).toHaveTextContent("5");
  });
});
