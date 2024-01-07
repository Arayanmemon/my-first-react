import { useContext, useState } from "react";

function Card(props) {
    let [count, setCount] = useState(0);

    return ( 
        <>
            <div className="card">
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
                <p>count: {count}</p>
                <button onClick={()=>{setCount(count++)}}>+ count</button>
                <button onClick={()=>{setCount(count--)}}>- count</button>
            </div>
        </>
    );
}





export default Card;