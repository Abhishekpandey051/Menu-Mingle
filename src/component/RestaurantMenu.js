import React from "react";
import useRestaurantMenu from "../utility/useRestaurantMenu";
// import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const ReastaurantMenu = () => {
  const { resid } = useParams();
  const resInfo = useRestaurantMenu(resid);
  // if(resInfo === null) return <Shimmer/>
  // const {name} = resInfo?.cards[0]?.card?.card?.info || {};
  // console.log(name)
  const { name, cuisines, avgRating, areaName, city } =
    resInfo?.cards[0]?.card?.card?.info || {};
  const cuisinesString = Array.isArray(cuisines) ? cuisines.join(",") : "";
  // const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const category =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("category",category);
  // const itemCard = category?.card?.card?.itemCards;
  // console.log(itemCard);
  return (
    <div className="text-center">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      {/* <p>{feeDetails.message}</p> */}
      <p className="font-bold text-lg">{cuisinesString}</p>
      <p>{avgRating}</p>
      <p>
        {city}-{areaName}
      </p>

      {category &&
        category.length > 0?(category.map((item) => <RestaurantCategory data={item?.card?.card} />)):<h1>Not found</h1>}
    </div>
  );
};

export default ReastaurantMenu;
