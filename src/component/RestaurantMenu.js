import React from 'react'
import useRestaurantMenu from '../utility/useRestaurantMenu';
import Shimmer from './Shimmer';
import {useParams} from 'react-router-dom'

const ReastaurantMenu = () =>{
    const {resid} = useParams();
    const resInfo = useRestaurantMenu(resid)
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
  <Shimmer/>
)}
            </ul> 
        </div>
    )
}

export default ReastaurantMenu;