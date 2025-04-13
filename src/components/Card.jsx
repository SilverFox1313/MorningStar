import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="lightblack rounded-xl flex-col items-center justify-center p-4">
      <div className="w-full flex justify-center">
        <img src={image} alt="seo" className="" />
      </div>
      <h3 className="text-center">{title}</h3>
      <p className="mt-4 text-sm darkgray text-center">{description}</p>
    </div>
  );
};

export default Card;
