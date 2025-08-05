import { useState } from "react";

export default function CountClick(){
    const [counter, setCounter] = useState(0);

    function handleClick(){
        setCounter(counter + 1);
    }

    return(
        <button onClick={handleClick}>
            {counter}
        </button>
    )
}

