import { useState } from "react";
import "./News.css";
import { Rating } from "@smastrom/react-rating";
import { BsBookmark } from "react-icons/bs";
import { GoShareAndroid } from "react-icons/go";
import { StarRating, StarRatingInput } from "react-star-rating-input";
import { BsStarFill } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const News = ({ newsDetails }) => {
  const {
    _id,
    category_id,
    title,
    author,
    image_url,
    details,
    rating,
    total_view,
  } = newsDetails;

  return (
    <div className="rounded-xl border-bgCard" id="newDetails">
      <div className=" bg-bgCard rounded-t-lg py-3 px-3">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <img className="w-12 h-12 rounded-full" src={author.img} alt="" />
            <div>
              <p>{author.name}</p>
              <p className="text-sm text-gray-400">{author.published_date}</p>
            </div>
          </div>
          <div className="text-2xl flex gap-2">
            <BsBookmark />
            <GoShareAndroid />
          </div>
        </div>
      </div>
      <div>
        <h2 className="pt-3 px-3">{title}</h2>
      </div>
      <figure className="px-3 pt-3">
        <img src={image_url} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="items-center text-justify m-3 py-4 border-b">
        {/* <p>{details}</p> */}
        {details.length < 150 ? (<>{details}</>) : (<>
        {details.slice(0,250)+'...'}
        <Link className=" text-readMore font-bold" to={`/news/${_id}`}>Read More</Link>
        </>)}
      </div>
      <div className="px-3 pb-4 flex justify-between text-gray-500 text-xl">
        <div>
        <div className="flex items-center text-readMore ">
          <BsStarFill id="starrating" className="me-2" />
          <BsStarFill id="starrating" className="me-2" />
          <BsStarFill id="starrating" className="me-2" />
          <BsStarFill id="starrating" className="me-2" />
        </div>
          {rating.number}
        </div>
        <div className="flex items-center">
          <FaRegEye className="me-2" /> {total_view}
        </div>
      </div>
    </div>
  );
};

export default News;
