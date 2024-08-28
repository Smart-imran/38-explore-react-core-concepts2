import { useState } from "react"

export default function Team(){


    const [playerCount, playerSet] = useState(11);


    const handleAdd = () => {
        const newCount = playerCount + 1;
        playerSet(newCount);

    }
    const handleReduce = () => {
        const newCount = playerCount - 1;
        playerSet(newCount);

    }


    const teamStyle = {
        border : "2px solid red",
        margin:"15px",
        padding:"15px",
        borderRadius: "15px"
    }

    const btnStyle = {
        marginBottom: "10px"
    }


    return(
        <div style={teamStyle}>
            <h3>Players: {playerCount} </h3>
            <button onClick={handleAdd}>Add</button>
            <button style={btnStyle} onClick={handleReduce}>Remove</button>
        </div>
    )
}
