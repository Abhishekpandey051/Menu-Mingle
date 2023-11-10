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
        "https://www.swiggy.com/mapi/homepage/getCards?lat=28.6055049&lng=77.3769437"
      );
      console.log("jgahj".response)
      const data = await response.json();
      const resdata =
        data?.data?.success.cards[3]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants;
      console.log("Here is the data from api resdata", resdata );

      // const rest = data.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants.info;
      //  const rest = data.cards[0].card.gridElements.infoWithStyle.restautants;
      setListOfRest(resdata);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="px-3 sticky top-40 z-50 block">
    
      <h1 className=" text-center text-2xl font-bold mt-6">Your Restaurant</h1>
      
      {listOfRest.map((val) => (
        <Card key={val.id} res={val.info} />
      ))}
    </div>
  );
}