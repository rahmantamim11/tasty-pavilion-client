import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "./Cover";
import menuImg from '../assets/menu/banner3.jpg'
import dessertImg from '../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../assets/menu/pizza-bg.jpg'
import saladImg from '../assets/menu/salad-bg.jpg'
import soupImg from '../assets/menu/soup-bg.jpg'
import useMenu from "./Hooks/useMenu";
import SectionTitle from "../components/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered')
  return (
    <div>
      <Helmet>
        <title>Menu</title>
      </Helmet>
      {/* Main Cover */}
      <Cover img={menuImg} title="our menu" description="Welcome to TASTY PAVILION, where culinary excellence takes center stage on our diverse and enticing menu. Indulge in succulent steaks, exquisite seafood, and gourmet pasta crafted to perfection by our skilled chefs. "></Cover>
      {/* Offered */}
      <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* Dessert Menu Item */}
      <MenuCategory items={dessert} title={"dessert"} img={dessertImg} description={"Indulge your sweet cravings with the divine desserts at TASTY PAVILION. Our dessert menu is a symphony of decadent delights, crafted to satisfy the most discerning sweet tooth. From the rich and velvety chocolate creations to the light and refreshing fruit-infused treats, each dessert is a masterpiece of flavor and presentation."}  ></MenuCategory>
      {/* Pizza menu Items */}
      <MenuCategory items={pizza} title={"pizza"} img={pizzaImg} description={"Our pizzas are more than a dish; they're a celebration of flavor, craftsmanship, and quality. Picture a crispy, golden crust as the canvas for a symphony of premium cheeses, locally sourced ingredients, and our secret sauce that adds the perfect touch of tanginess. From the classic Margherita, a timeless favorite, to our innovative and mouthwatering specialty pizzas, each creation is a testament to our commitment to culinary excellence."}  ></MenuCategory>
      {/* Salad menu Items */}
      <MenuCategory items={salad} title={"salad"} img={saladImg} description={"Our salad creations are a symphony of freshness, color, and flavor, meticulously crafted to delight health-conscious food enthusiasts and flavor aficionados alike. Immerse yourself in a garden of crisp, locally sourced greens, complemented by a medley of ripe, seasonal vegetables, and garnished with an array of tantalizing toppings. From the classic Caesar with its creamy dressing and savory croutons to our signature salads featuring innovative flavor combinations, each bowl is a testament to our dedication to culinary artistry. "}  ></MenuCategory>
      {/* Soup Menu Items */}
      <MenuCategory items={soup} title={"soup"} img={soupImg} description={"Warm your soul with the exquisite soups at TASTY PAVILION. Crafted with care and culinary expertise, our soups are a comforting symphony of flavors that promise to tantalize your taste buds. From velvety bisques to hearty broths, each spoonful is a journey into savory perfection. Our chefs use only the finest, freshest ingredients to create a diverse range of soups, catering to both classic cravings and adventurous palates. "}  ></MenuCategory>

    </div>
  );
};

export default Menu;
