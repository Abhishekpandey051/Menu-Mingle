import React, { useEffect,useState } from 'react'
// import Shimmer from './Shimmer';
import {useParams} from 'react-router-dom'

const ReastaurantMenu = () =>{
    const [resInfo,setResInfo]=useState(null);
    const {resid} = useParams();
    console.log(resid)
    useEffect(()=>{
        fetchMenu()
    },[])
    console.log("fjfghdiufhIfhdkfdh")
    const fetchMenu = async() =>{
        try{
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId='+resid+'&catalog_qa=undefined&submitAction=ENTER')
        const json = await data.json();
        console.log("Menu  data coming from API",json.data)
        setResInfo(json.data)
        }catch(error){
            console.log("Error fetching data",error)
        }
    }
    // if(resInfo === null) return <Shimmer/>
    // const {name} = resInfo?.cards[0]?.card?.card?.info || {};
    // console.log(name)
    const {name,cuisines,avgRating,areaName,city} = resInfo?.cards[0]?.card?.card?.info || {};
    const cuisinesString = Array.isArray(cuisines) ? cuisines.join(",") : "";
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};
    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {})
    return(
        <div>
            <h1>{name}</h1>
            {/* <p>{feeDetails.message}</p> */}
            <p>{avgRating }</p>
            <p>{cuisinesString}</p>
            <p>{city}-{areaName}</p>
            <ul>
            {itemCards && itemCards.length > 0 ? (
            itemCards.map((item) => (
             <li key={item?.card?.info?.id}>
             {item?.card?.info?.name} {"Rs"} - {item?.card?.info?.defaultPrice / 100 || item?.card?.info?.price / 100 }
    </li>
  ))
) : (
  <p>No items available</p>
)}
            </ul> 
        </div>
    )
}

export default ReastaurantMenu;