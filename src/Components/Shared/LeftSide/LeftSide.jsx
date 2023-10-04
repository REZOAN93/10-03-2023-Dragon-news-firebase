import React from "react";
import { BsCalendar4 } from "react-icons/bs";

const LeftSide = ({ data }) => {
  const { id, description, image, published_date, category } = data;
  return (
      <div className="card card-compact space-y-3">
        <figure className="w-full">
          <img
          className="w-full"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className=" space-y-2">
          <h2 className=" font-semibold text-sm text-justify">{description}</h2>
          <div className="flex justify-between text-sm">
            <div>
                <p className=" font-bold">{category}</p>
            </div>
            <div className="flex gap-2 items-center">
                <BsCalendar4/>
                <p>{published_date}</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default LeftSide;
