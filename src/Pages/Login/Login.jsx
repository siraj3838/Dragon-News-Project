import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const location = useLocation();
    
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        loginUser(email, password)
            .then(res => {
                console.log(res.user)
                navigate(location?.state ? location.state : '/');
            })
            .then(error => console.log(error))

    }
    return (
        <div className="mt-5 bg-[#F3F3F3]">
            <div className="">
                <Navbar></Navbar>
            </div>
            <div className="py-10 rounded-md">
                <div className="bg-white px-24 w-[600px] mx-auto py-16">
                    <h3 className="text-4xl font-semibold text-center">Login your account</h3>
                    <hr className="my-12" />
                    <form onSubmit={handleLogin}>
                        <div className="form-control w-full px-5 mb-6">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Email address</span>

                            </label>
                            <input type="email" name="email" required placeholder="Enter your email address" className="input rounded-md w-full mt-4 bg-[#F3F3F3] py-7" />

                        </div>
                        <div className="form-control w-full px-5">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Password</span>

                            </label>
                            <input type="password" name="password" required placeholder="Enter your password" className="input rounded-md w-full mt-4 bg-[#F3F3F3] py-7" />

                        </div>
                        <div className="w-full mt-8 px-5">
                            <input className="bg-[#403F3F] text-white w-full py-4 rounded-md" type="submit" value="Login" />
                        </div>
                    </form>
                    <h3 className="text-center mt-8 text-base font-semibold">Do not Have An Account ? <Link to={'/registration'}><span className="text-[#FF8C47]">Register</span></Link></h3>
                </div>
            </div>
        </div>
    );
};

export default Login;