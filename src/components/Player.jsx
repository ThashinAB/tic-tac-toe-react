import { useState } from "react";


export default function Player({ initialName, symbol, isActive, onChangeName }) {

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function Edit() {
        setIsEditing((editing) => !editing);

        if (isEditing){
            onChangeName(symbol, playerName);
        }
        
    }

    function handleNameChange(name) {
        setPlayerName(name.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleNameChange} />;
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {/* {isEditing ? (<input type="text" required/>) : (<span className="player-name">{name}</span>)} */}
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={Edit}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}