import * as React from "react";
import styles from "./CommanderDamage.module.sass";

type COMMANDERDAMAGE_PROPS = {
  name: string;
  addLife: () => void;
  subtractLife: () => void;
};

const CommanderDamage = ({
  name,
  addLife,
  subtractLife,
}: COMMANDERDAMAGE_PROPS) => {
  const [commanderDamage, setCommanderDamage] = React.useState(0);

  const addCommanderDamage = () => {
    setCommanderDamage(() => commanderDamage + 1);
    subtractLife();
  };

  const subtractCommanderDamage = () => {
    if (commanderDamage > 0) {
      setCommanderDamage(() => commanderDamage - 1);
      addLife();
    }
  };

  return (
    <div className={styles.commander_damage}>
      <h3 className={styles.commander_damage__name}>{`${name}: `}</h3>
      <button
        className={styles.commander_damage__subtract}
        data-testid="subtractCommanderdamage"
        onClick={subtractCommanderDamage}
      >
        -
      </button>
      <span
        className={styles.commander_damage__value}
        data-testid="commanderdamage"
      >
        {commanderDamage}
      </span>
      <button
        className={styles.commander_damage__add}
        data-testid="addCommanderdamage"
        onClick={addCommanderDamage}
      >
        +
      </button>
    </div>
  );
};

export default CommanderDamage;
