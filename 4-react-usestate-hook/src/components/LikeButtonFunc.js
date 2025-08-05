import { useState } from "react";


function LikeButtonFunc(){
    const [name, setName]  = useState(null);
    const [liked, setLiked] = useState(false);

    function handleClick(){
        setLiked(true);
    }

    return (

        <div>
            {liked === true ? (
                    <p>You liked this</p>
                ) : (
                    <button onClick={handleClick}> Like Func </button>
                )
            } 
        </div> 
    )
}

export default LikeButtonFunc;