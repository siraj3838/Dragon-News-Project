import { FaGoogle, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-7'>
                <h2 className="text-2xl font-bold">Login With</h2>
                <button className="btn text-xl font-semibold btn-outline w-full flex gap-1">
                    <FaGoogle className='text-blue-600'></FaGoogle>
                    Login with Google
                </button>
                <button className="btn text-xl font-semibold btn-outline w-full flex gap-1">
                    <FaGithub className='text-2xl'></FaGithub>
                    Login with Github
                </button>
            </div>
            <div className='p-4 space-y-3 mb-7'>
                <h2 className="text-2xl font-bold">Find Us On</h2>
                <div className='border space-y-3 rounded-lg'>
                    <a href="" className="p-4 text-xl font-semibold w-full flex items-center gap-2">
                        <FaFacebook className='bg-blue-600 text-[#F3F3F3] rounded-full text-3xl'></FaFacebook>
                        Facebook
                    </a>
                    <hr />
                    <a href="" className="p-4 text-xl font-semibold w-full flex gap-2 items-center">
                        <AiFillTwitterCircle className='bg-blue-400 text-[#F3F3F3] rounded-full text-3xl'></AiFillTwitterCircle>
                        Twitter
                    </a>
                    <hr />
                    <a href="" className="p-4 text-xl font-semibold w-full flex gap-2 items-center">
                        <FaInstagram className='text-red-700 bg-[#F3F3F3] rounded-full text-3xl'></FaInstagram>
                        Instagram
                    </a>
                </div>
            </div>
            <div className='p-4 space-y-3 mb-7 bg-[#F3F3F3]'>
                <h2 className="text-2xl font-bold">Q-Zone</h2>
                <div className='mt-5 space-y-5'>
                    <img src="https://i.ibb.co/vQwGX8Q/qZone1.png" alt="" />
                    <img src="https://i.ibb.co/XSCCD3z/qZone2.png" alt="" />
                    <img src="https://i.ibb.co/xmSJnjm/qZone3.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;