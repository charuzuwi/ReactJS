import { use, useState } from "react";
 
export default function FruitList() {
    const [fruitInput, setFruitInput] = useState("");
    const [fruits, setFruits] = useState([]);
 
    const addFruit = () => {
        if(fruitInput.trim() === "") return;
 
        setFruits([...fruits, fruitInput]);
        setFruitInput("");
 
    };
 
    const printArray = fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
         ))
    return(
        <div style={{textAlign: "center",
                    fontSize: "30px",
                    marginTop: "15%"
        }}>
 
            <h2> Favorite Fruits </h2>
 
            <input
                type="text"
                value={fruitInput}
                onChange={(e) => setFruitInput(e.target.value)}
                placeholder="Enter a fruit"
            />
 
            <button onClick={addFruit}>Add</button>
 
            <ul>
                    {printArray}
            </ul>
 
        </div>
           
    );
}