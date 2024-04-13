import { useContext } from "react";
import Navbar from "../shared/navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

    const authInfo= useContext(AuthContext);
    const {createUser} =authInfo;

    const handleRegister=(e)=>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form=new FormData(e.currentTarget);
        const name= form.get('name');
        const photo=form.get('photo');
        const email= form.get('email');
        const password= form.get('password');
        // console.log(name,photo,email,password);

        createUser(email,password)
        .then((result)=>{
            console.log(result.user);
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }


    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl my-10 text-center">Please Login</h2>
            <form onSubmit={handleRegister} className="lg:w-1/2 md:w-3/4 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="text-center text-red-800 font-bold mt-4 mb-2">Already have an account? <Link to='/login'>Login Now</Link></p>
        </div>
    );
};

export default Register;