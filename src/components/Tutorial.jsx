import React from "react";
import Card from "./Card";
import { tutorial } from '../constants/index';

const Tutorial = () => {
  return (
    <>
      <h2 id="curso" className="text-4xl lightgray text-center py-10">¿Qué aprenderás?</h2>
      <div className="grid md:grid-cols-4 grid-cols-2 h-[250px] gap-4 py-4 md:px-0 px-4">
      {tutorial.map((item, index) => (
          <Card
            key={index} 
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
};

export default Tutorial;
