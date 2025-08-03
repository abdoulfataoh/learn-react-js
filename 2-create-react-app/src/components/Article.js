
function Article(props){
    return (
        <div style={{background: '#ff0236'}} className="h-50 w-50 border-2">
            <img className="h-40 w-full" src={props.url} />
            <span>
                <span className="text-3xl">
                    {props.prize} {props.currency}
                </span>
                {props.name} 
            </span>
        </div>
    )
}

export default Article;
