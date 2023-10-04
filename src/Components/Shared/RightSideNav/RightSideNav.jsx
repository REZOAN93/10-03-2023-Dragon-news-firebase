import { FaGoogle } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";
import qimg1 from "../../../assets/qZone1.png";
import qimg2 from "../../../assets/qZone2.png";
import qimg3 from "../../../assets/qZone3.png";
import AmazingNews from "./AmazingNews";

const RightSideNav = () => {
  return (
    <div className=" space-y-6">
      <div className="space-y-2 my-2">
        <h1 className="font-bold text-xl">Login With</h1>
        <button className="btn capitalize btn-outline w-full text-lg btn-primary">
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn w-full capitalize btn-outline text-lg">
          <AiFillGithub />
          Login with Github
        </button>
      </div>
      <div>
        <h1 className="text-xl mb-4 font-bold">Find Us On</h1>
        <div className="p-3 border rounded-t-lg">
          <a className="flex items-center gap-3 text-xl" href="">
            <SiFacebook />
            <p>Facebook</p>
          </a>
        </div>
        <div className="p-3 border-x">
          <a className="flex items-center gap-3 text-xl" href="">
            <SiTwitter />
            <p>Twitter</p>
          </a>
        </div>
        <div className="p-3 border rounded-b-lg">
          <a className="flex items-center gap-3 text-xl" href="">
            <SiInstagram />
            <p>Instagram</p>
          </a>
        </div>
      </div>
      <div className=" bg-neutral-200 p-2 rounded-md">
        <h1 className="text-xl mb-4 font-bold">Q-Zone</h1>
        <div className="flex justify-center flex-col items-cente">
          <img src={qimg1} alt="" />
          <img src={qimg2} alt="" />
          <img src={qimg3} alt="" />
        </div>
      </div>
      <AmazingNews></AmazingNews>
    </div>
  );
};

export default RightSideNav;
