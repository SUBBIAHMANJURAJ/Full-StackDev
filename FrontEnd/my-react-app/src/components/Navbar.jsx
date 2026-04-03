import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/profile'>Profile</Link>
        
        </>
    );
}
export default Navbar;