import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function nameHandler(event) {
    setPlayerName(event.target.value);
  }
  function clickHandler() {
    setIsEditing((editing) => !editing);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      {!isEditing ? (
        <span className="player">
          <span className="player-name">{playerName}</span>
          <span className="player-symbol">{symbol}</span>
        </span>
      ) : (
        <span className="player">
          <input
            type="text"
            required
            value={playerName}
            onChange={nameHandler}
          />
        </span>
      )}

      <button onClick={clickHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
