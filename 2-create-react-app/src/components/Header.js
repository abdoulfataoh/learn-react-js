
function Header(){
    return (
        <div className="bg-yellow-300 flex items-center p-2">
            <h1 className="font-semibold text-xl">UVBF</h1>
            <ul className="ml-auto flex gap-2 [&>li]:border-2 [&>li]:p-2 ">
                <li>Home</li>
                <li>Contact</li>
                <li>Blog</li>
            </ul>
        </div>
    );
}

export default Header;