import * as React from "react";
import Player from "../components/Player";

const DEFAULT_LIFE = 40;
const DEFAULT_PLAYERS = 4;

const Index = () => {
  return (
    <div>
      {Array.from({ length: DEFAULT_PLAYERS }).map((_, i) => (
        <Player
          key={i}
          name={`Player ${i + 1}`}
          defaultLife={DEFAULT_LIFE}
          playerNumber={i + 1}
          numberOfPlayers={DEFAULT_PLAYERS}
        />
      ))}
    </div>
  );
};

export default Index;
