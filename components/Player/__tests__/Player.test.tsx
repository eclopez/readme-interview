import { render, screen, fireEvent } from "@testing-library/react";
import Player from "../Player";
import "@testing-library/jest-dom";

describe("Index", () => {
  it("should subtract 5 life when the subtract life button is pressed 5 times", () => {
    render(
      <Player
        name={"Player 1"}
        defaultLife={40}
        numberOfPlayers={1}
        playerNumber={1}
      />
    );

    for (let i = 0; i < 5; i++) {
      fireEvent.click(screen.getByText("-"));
    }

    expect(screen.getByTestId("life")).toHaveTextContent("35");
  });

  it("should add 5 life when the add life button is pressed 5 times", () => {
    render(
      <Player
        name={"Player 1"}
        defaultLife={40}
        numberOfPlayers={1}
        playerNumber={1}
      />
    );

    for (let i = 0; i < 5; i++) {
      fireEvent.click(screen.getByText("+"));
    }

    expect(screen.getByTestId("life")).toHaveTextContent("45");
  });

  it("should subtract 3 life when commander damage has 3 added and add 3 life when commander damager has 3 subtracted", () => {
    render(
      <Player
        name={"Player 1"}
        defaultLife={40}
        numberOfPlayers={2}
        playerNumber={1}
      />
    );

    for (let i = 0; i < 3; i++) {
      fireEvent.click(screen.getByTestId("addCommanderdamage"));
    }

    expect(screen.getByTestId("commanderdamage")).toHaveTextContent("3");
    expect(screen.getByTestId("life")).toHaveTextContent("37");

    for (let i = 0; i < 3; i++) {
      fireEvent.click(screen.getByTestId("subtractCommanderdamage"));
    }

    expect(screen.getByTestId("commanderdamage")).toHaveTextContent("0");
    expect(screen.getByTestId("life")).toHaveTextContent("40");
  });
});
