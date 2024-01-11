import { useEffect, useState } from "react";
import { API_DATA } from "./constant";

const useApiData = () =>{
    const[listOfRest,setListOfRest] = useState([]);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async() =>{
        try{
            const data = await fetch(API_DATA);
            const json = await data.json();
            const resdata =
            json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
            setListOfRest(resdata);
        }catch(error){
            console.log("Error fetching data ",error);
        }
    }
    return listOfRest;
}

export default useApiData;