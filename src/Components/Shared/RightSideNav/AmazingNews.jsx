import React from "react";

const AmazingNews = () => {
  return (
    <div>
      <div
        className="hero py-28"
        style={{
          backgroundImage: "url(https://i.ibb.co/tzqP2gz/bg.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">
              Create an Amazing Newspaper
            </h1>
            <p className="mb-5 px-6">
              Discover thousands of options, easy to customize layouts,
              one-click to import demo and much more. et a id nisi.
            </p>
            <button className="btn btn-primary bg-basicColor border-none hover:bg-basicColor rounded-none">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazingNews;
