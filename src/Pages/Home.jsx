import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Category from "./Category";
import Category2 from "./Category2";
import CategoryCallUs from "./CategoryCallUs";
import CategoryChefRecommend from "./CategoryChefRecommend";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Category2></Category2>
      <PopularMenu></PopularMenu>
      <CategoryCallUs></CategoryCallUs>
      <CategoryChefRecommend></CategoryChefRecommend>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
