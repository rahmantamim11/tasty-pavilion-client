import React from "react";
import img1 from "../assets/home/slide1.jpg";
import img2 from "../assets/home/slide1.jpg";
import img3 from "../assets/home/slide1.jpg";
import SectionTitle from "../components/SectionTitle";

const CategoryChefRecommend = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"You Should Try"}
        heading={"Chef Recommends"}
      ></SectionTitle>
      <div className="grid md:grid-cols-3 justify-center items-center gap-2 mt-16">
        <div className="card w-96 bg-slate-200 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img1} alt="Salad" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center text-black">
            <h2 className="card-title">Mediterranean Bliss Salad</h2>
            <p>A vibrant fusion of sun-kissed tomatoes, olives, feta, and crisp greens.</p>
            <div className="card-actions">
              <button className="btn btn-warning">ADD TO CART</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-slate-200 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img2} alt="Salad" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center text-black">
            <h2 className="card-title">Zen Garden Quinoa Salad</h2>
            <p>Nutrient-rich quinoa, edamame, and colorful veggies harmonize in a refreshing bowl.</p>
            <div className="card-actions">
              <button className="btn btn-warning">ADD TO CART</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-slate-200 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img3} alt="Salad" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center text-black">
            <h2 className="card-title">Citrus Kale Caesar Delight</h2>
            <p>Robust kale meets zesty citrus, Parmesan, and crunchy croutons—a Caesar revolution</p>
            <div className="card-actions">
              <button className="btn btn-warning">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryChefRecommend;
