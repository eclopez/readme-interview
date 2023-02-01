import * as React from "react";
import CommanderDamage from "../CommanderDamage";

type PLAYER_PROPS = {
  name: string;
  defaultLife: number;
  numberOfPlayers: number;
  playerNumber: number;
};

const Player = ({
  name,
  defaultLife,
  numberOfPlayers,
  playerNumber,
}: PLAYER_PROPS) => {
  const [life, setLife] = React.useState(defaultLife);

  const addLife = () => {
    setLife(() => life + 1);
  };

  const subtractLife = () => {
    setLife(() => life - 1);
  };

  return (
    <div>
      <h2>{name}</h2>
      <button onClick={subtractLife}>-</button>
      <span data-testid="life">{life}</span>
      <button onClick={addLife}>+</button>
      <ul>
        {Array.from({ length: numberOfPlayers }).map((_, i) => (
          <React.Fragment key={i}>
            {i + 1 !== playerNumber && (
              <li>
                <CommanderDamage
                  name={`Player ${i + 1}`}
                  addLife={addLife}
                  subtractLife={subtractLife}
                />
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Player;
