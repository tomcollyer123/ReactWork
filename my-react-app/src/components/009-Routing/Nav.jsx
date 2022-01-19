import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <h3> Nav </h3>

            <h4> About </h4>
            <Link to="/about/1" >
                <img src='https://thumbs.dreamstime.com/b/black-us-sign-icon-logo-isolated-white-background-black-us-sign-icon-logo-isolated-white-background-simple-172074347.jpg' alt='about us' width="100px" height="100px" />
            </Link>
            <h4> Shop </h4>
            <Link to="/shop/1">
                <img src='https://s.tmimgcdn.com/scr/800x500/73800/click-shop-logo-template_73864-original.jpg' alt='shop' width="100px" height="100px" />
            </Link>
            <h4> Home </h4>
            <Link to="/">
                <img src='https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png' alt='home' width="100px" height="100px" />
            </Link>
        </div>

    );
}


export default Nav;