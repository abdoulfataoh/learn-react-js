
import { useState } from "react";


function LiveInput(){

    const [text, setText] = useState('Default text');

    function handleTextChange(e) {
        setText(e.target.value);
    }

    return (
        <div>
            <p>
                {text}
            </p>

            <input onChange={handleTextChange} type="text" />
        </div>
    )
}

export default LiveInput;