import { useState } from "react"

export default function Player({ name, symbol }) {
    const [isEditing, isStateEditing] = useState(false);
    const [initialName, setName] = useState(name);
    function editPlayer() {
        isStateEditing((editing) => !editing);
    }

    function handleChange(event) {
        setName(event.target.value)
    }
    return (
        <li>
            <span className="player">
                {!isEditing ? <span className="player-name">{initialName}</span> : <input type="text" required value={initialName} onChange={handleChange}></input>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={editPlayer}>{!isEditing ? 'Edit' : 'Save'}</button>
        </li>
    )
}
