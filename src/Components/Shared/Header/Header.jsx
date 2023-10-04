import img1 from "../../../assets/logo.png";
import Navbar from "../Navbar/Navbar";
import moment from "moment";

const Header = () => {
 

  return (
    <div className="">
      <div className=" space-y-2">
        <figure className="flex justify-center">
          <img src={img1} alt="" />
        </figure>
        <div className="text-center text-xl text-gray-600 space-y-1">
          <p>Journalism Without Fear or Favour</p>
          <p>{moment().format('dddd, MMMM DD, YYYY')}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
