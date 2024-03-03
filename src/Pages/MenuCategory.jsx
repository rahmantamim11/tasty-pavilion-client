import React from "react";
import MenuItem from "./Shared/MenuItem";
import Cover from "./Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img, description }) => {
  return (
    <div className="pt-10">
      {title && (
        <Cover
          img={img}
          title={title}
          description={description}
        ></Cover>
      )}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
     <Link to={`/order/${title}`}> <button className="mt-3 mb-6 border-0 border-b-4 btn btn-outline btn-warning">ORDER YOUR FAVOURITE FOOD</button></Link>
      </div>
    </div>
  );
};

export default MenuCategory;
