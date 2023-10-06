import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import LeftSide from "../Shared/LeftSide/LeftSide";
import BrekingNews from "./BrekingNews";
import Navbar from "../Shared/Navbar/Navbar";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import News from "./News/News";

const Home = () => {
  const data = useLoaderData();
  const [category, setCategory] = useState([]);
  const [catData, setCatData] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  useEffect(() => {
    fetch("/catlist.json")
      .then((res) => res.json())
      .then((data) => setCatData(data));
  });
  return (
    <div>
      <Header></Header>
      <BrekingNews></BrekingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-7  mt-5">
        <div className="px-4 ">
          <h1 className="text-xl mb-3 font-semibold">All Category</h1>
          <h1 className=" bg-bgAll py-2 text-center rounded-lg text-xl font-semibold">
            National News
          </h1>
          <div>
            {category.map((na) => (
              <>
                <li key={na.id} className="list-none py-2 w-8/12 flex mx-auto">
                  <NavLink
                    to={`/category/${na.id}`}
                    className="hover:cursor-pointer "
                  >
                    {na.name}
                  </NavLink>
                </li>
              </>
            ))}
          </div>
          <div className="flex flex-col my-5 gap-6">
            {catData.map((na) => (
              <LeftSide key={na.id} data={na}></LeftSide>
            ))}
          </div>
        </div>
        <div className="  col-span-2">
          <h1 className="text-xl mb-3 font-semibold">Dragon News Home</h1>
          <div className="flex flex-col gap-6">
            {data.map((na) => (
              <News key={na._id} newsDetails={na}></News>
            ))}
          </div>
        </div>
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
