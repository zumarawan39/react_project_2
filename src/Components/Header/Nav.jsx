import "./Nav.css"
function Nav() {
    return(
        <>
        <nav>
            <div className="right">
                <img src="/images/logo.png" alt="" />
            </div>
            <div className="left">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Gallery</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}
export default Nav;