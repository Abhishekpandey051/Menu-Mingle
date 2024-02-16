import { useState } from "react";
import useRestaurantMenu from "../utility/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const ReastaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { resid } = useParams();
  const resInfo = useRestaurantMenu(resid);
  const { name, cuisines, avgRating, areaName, city } =
    resInfo?.cards[0]?.card?.card?.info || {};
  const cuisinesString = Array.isArray(cuisines) ? cuisines.join(",") : "";

  const category =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      {/* <p>{feeDetails.message}</p> */}
      <p className="font-bold text-lg">{cuisinesString}</p>
      <p>{avgRating}</p>
      <p>
        {city}-{areaName}
      </p>
      {/* controlled component
Lifting-up Component
 */}
      {category && category.length > 0 ? (
        category.map((item, index) => (
          <RestaurantCategory
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index)}
            key={item?.card?.card.title}
            data={item?.card?.card}
          />
        ))
      ) : (
        <h1>Not found</h1>
      )}
    </div>
  );
};

export default ReastaurantMenu;
