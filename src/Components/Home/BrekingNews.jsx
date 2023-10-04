import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BrekingNews = () => {
  return (
    <div className=" bg-bgAll p-2 mt-2 flex gap-3">
      <button className=" bg-basicColor px-6 text-neutral-50 py-2">
        Latest
      </button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-8" to={'/'}>I can be a React component, multiple React components, or just some text...</Link>
        <Link className="mr-8" to={'/'}>I can be a React component, multiple React components, or just some text....</Link>
        <Link className="mr-8" to={'/'}>I can be a React component, multiple React components, or just some text....</Link>
        <Link className="mr-8" to={'/'}>I can be a React component, multiple React components, or just some text....</Link>
        <Link className="mr-8" to={'/'}>I can be a React component, multiple React components, or just some text....</Link>
      </Marquee>
    </div>
  );
};

export default BrekingNews;
