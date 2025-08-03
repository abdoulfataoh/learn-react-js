
function ArticlesLayout(props){
    return(
        <div className="flex gap-4 flex-wrap"> 
            {props.children}
        </div>
    )
}

export default ArticlesLayout;