import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Body() {
  const [listOfRest, setListOfRest] = useState([]);

  useEffect(() => {
    fetchAndSetData();
  }, []);

  const fetchAndSetData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      console.log(data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
      const resdata =
      data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
      setListOfRest(resdata);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const topResto = () =>{
    
  }
  return (
    <div className="mx-3 sticky z-50 block ">
    <button onClick={topResto} className="m-3 bg-gray-900 text-white font-bold">Top Rated Reastaurant</button>
      <h1 className=" text-center text-2xl font-bold mt-4">Your Restaurant</h1>
      
      {listOfRest.map((val) => (
        <Card key={val.id} res={val.info} />
      ))}
    </div>
  );
}