import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);

    }
    const handReduce = () => {
        const newCount = count - 1;
        setCount(newCount);

    }


    return (
        <div style={{ border: "2px solid blue", borderRadius: "10px", padding: "20px 20px" }}>
            <h3>Counter: {count}</h3>
            <button style={{ marginBottom: "10px" }} onClick={handleAdd}>Add Click</button>
            <button style={{ marginBottom: "10px" }} onClick={handReduce}>Reduce</button>
        </div>
    )
}