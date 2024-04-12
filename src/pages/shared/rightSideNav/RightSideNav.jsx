import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-1 space-y-3 mb-6">
                <h2 className="text-3xl">Login With</h2>
                <button className="w-full btn btn-outline">
                    <FaGoogle className="mr-2" />
                    Login with google
                </button>

                <button className="w-full btn btn-outline">
                    <FaGithub className="mr-2" />
                    Login with github
                </button>
            </div>
            





            <div className="p-1 space-y-3 mb-6">
                <h2 className="text-3xl">Find us on</h2>
                <a className="p-4 flex items-center gap-5 border rounded-lg btn btn-primary" href="">
                   < FaFacebook></FaFacebook>
                   Facebook
                </a>

                <a className="p-4 flex items-center gap-5 border rounded-lg btn btn-secondary" href="">
                   <FaTwitter></FaTwitter>
                   Twitter
                </a>

                <a className="p-4 flex items-center gap-5 border rounded-lg btn btn-success" href="">
                   <FaInstagram></FaInstagram>
                   Instagram
                </a>
            </div>





            <div className="p-4 space-y-3 mb-6 bg-slate-200">
                <h2 className="text-3xl">Q-Zone</h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>

        </div>
    );
};

export default RightSideNav;