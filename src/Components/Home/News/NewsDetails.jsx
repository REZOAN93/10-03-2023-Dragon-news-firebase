import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import { BiArrowBack } from "react-icons/bi";

const NewsDetails = () => {
  const [news, setSpacifcNews] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => {
        const spacifiedNews = data.find((na) => na._id === id);
        setSpacifcNews(spacifiedNews);
      });
  }, [id]);

  const {
    _id,
    category_id,
    title,
    author,
    image_url,
    details,
    rating,
    total_view,
  } = news;
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-4 gap-6">
        <div className=" col-span-3">
           <h1 className=" text-2xl font-bold mb-3">Dragon News</h1>
          <div className="rounded-xl border-bgCard" id="newDetails">
            
            <figure className="px-3 pt-3 w-full">
              <img src={image_url} alt="Shoes" className="rounded-xl w-full" />
            </figure>
            <div>
              <h2 className="py-4 px-3 font-bold text-3xl">{title}</h2>
            </div>
            <div className="items-center text-justify m-3 py-4 ">
              <p>{details}</p>
                <Link to={"/"}> <button className=" btn mt-6 bg-backBtn text-white p-3"> <span><BiArrowBack/></span> All news in this category</button> </Link>
            </div>
            
          </div>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
