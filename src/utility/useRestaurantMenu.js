import { useEffect, useState } from "react"
import { MENU_API } from "./constant";

const useRestaurantMenu = (resid) =>{
    const[resInfo,setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async() =>{
        try{
            const data = await fetch(MENU_API + resid);
            const json = await data.json();
            setResInfo(json.data);
        }catch(error){
            console.log("data not found",error)
        }
    }
    return resInfo;
}

export default useRestaurantMenu;
