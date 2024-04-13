import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {

    const { user,logOut } = useContext(AuthContext);

    const navLinks = <>
        <NavLink className={({ isActive }) => isActive ? 'bg-red-500 p-2 mr-4' : 'bg-slate-200 p-2 mr-4'} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'bg-red-500 p-2 mr-4' : 'bg-slate-200 p-2 mr-4'} to="/about">About</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'bg-red-500 p-2' : 'bg-slate-200 p-2'} to='/career'>Career</NavLink>
    </>

    const handleSignOut=()=>{
         logOut()
         .then(()=>{
             console.log('User logged out');
         })
         .catch((error)=>{
            console.log(error.message)
         })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="w-10 rounded-full mr-4">
                    <img alt="Tailwind CSS Navbar component" src={logo} />
                </div>
                {
                    user ? <button onClick={handleSignOut} className="btn btn-warning">Log Out</button>
                        : <Link to='/login'>
                            <button className="btn">Login</button>
                        </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;