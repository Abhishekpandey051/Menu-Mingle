import React, { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";

export default function Body() {
  const [listOfRest, setListOfRest] = useState([]);
  const [searcCard, setSearchCard] = useState([]);
  const [inputValue,setinputValue] = useState("");

  useEffect(() => {
    fetchAndSetData();
  }, []);

  const fetchAndSetData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      // console.log(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
      const resdata =
      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      console.log(resdata)
      setListOfRest(resdata);
      setSearchCard(resdata);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const topResto = () =>{
    setSearchCard(searcCard.filter((res)=>res.info.avgRating>4.2))
  }
  const searchRes = () =>{
    const searchName = listOfRest.filter((resName)=>resName.info.name.toLowerCase().includes(inputValue.toLocaleLowerCase()));
    setSearchCard(searchName)
    setinputValue('')
  }
  // if(listOfRest.length === 0){
  //   return <Shimmer/>
  // }
  return (listOfRest.length === 0?<Shimmer/>:
    <div className="mx-3 sticky z-50 block ">
    <div className="mt-2">
    <button onClick={topResto} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Top Restaurant</button>
    <input onChange={(e)=>{setinputValue(e.target.value)}} type="text" className="border border-blue-500 p-2 ml-2 outline-none rounded-lg" value={inputValue}/>
    <button onClick={searchRes} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-2 ml-1 border border-blue-500 hover:border-transparent rounded ">Search</button>
    </div>
      <h1 className=" text-center text-2xl font-bold mt-4">Your Restaurant</h1>
      
      {searcCard.map((val) => (
        <Card key={val.id} res={val.info} />
      ))}
    </div>
  );
}