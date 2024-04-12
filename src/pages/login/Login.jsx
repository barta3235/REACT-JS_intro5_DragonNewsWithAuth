import Navbar from "../shared/navbar/Navbar";
import { Link } from "react-router-dom";

const Login = () => {

    const handleLogin=(e)=>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form=new FormData(e.currentTarget);
        console.log(form.get('email'));
    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl my-10 text-center">Please Login</h2>
            <form onSubmit={handleLogin} className="lg:w-1/2 md:w-3/4 mx-auto">
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
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="text-center text-red-800 font-bold mt-4 mb-2">Do not have an account? <Link to='/register'>Register Now</Link></p>
        </div>
    );
};

export default Login;