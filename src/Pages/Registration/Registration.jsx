
import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Registration = () => {
    const { createUser } = useContext(AuthContext)
    const handleRegistration = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        createUser(email, password)
            .then(res => {
                console.log(res.user)
            })
            .catch(error => console.log(error.message))
        console.log(name, photo, email, password)
    }
    return (
        <div className="mt-5 bg-[#F3F3F3]">
            <div className="">
                <Navbar></Navbar>
            </div>
            <div className="py-10 rounded-md">
                <div className="bg-white px-24 w-[600px] mx-auto py-16">
                    <h3 className="text-4xl font-semibold text-center">Register your account</h3>
                    <hr className="my-12" />
                    <form onSubmit={handleRegistration}>
                        <div className="form-control w-full px-5 mb-6">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Your Name</span>

                            </label>
                            <input type="text" name="name" placeholder="Enter your name" required className="input rounded-md w-full mt-4 bg-[#F3F3F3] py-7" />

                        </div>
                        <div className="form-control w-full px-5">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Photo URL</span>

                            </label>
                            <input type="text" name="photo" placeholder="Enter your photo URL" className="input rounded-md w-full mt-4 bg-[#F3F3F3] py-7" />

                        </div>
                        <div className="form-control w-full px-5 my-6">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Email address</span>

                            </label>
                            <input type="email" placeholder="Enter your email address" name="email" required className="input rounded-md w-full mt-4 bg-[#F3F3F3] py-7" />

                        </div>
                        <div className="form-control w-full px-5">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Password</span>

                            </label>
                            <input type="password" placeholder="Enter your password" name="password" required className="input rounded-md w-full mt-4 bg-[#F3F3F3] py-7" />

                        </div>
                        <div className="form-control px-5 mt-5">
                            <label className="label cursor-pointer">
                                <input type="checkbox" required className="checkbox checkbox-primary" />
                            </label>
                        </div>
                        <div className="w-full mt-8 px-5">
                            <input className="bg-[#403F3F] text-white w-full py-4 rounded-md" type="submit" value="Register" />
                        </div>
                    </form>
                    <h3 className="text-center mt-8 text-base font-semibold">Already Have An Account ? <Link to={'/login'}><span className="text-[#FF8C47]">Login</span></Link></h3>
                </div>
            </div>
        </div>
    );
};

export default Registration;