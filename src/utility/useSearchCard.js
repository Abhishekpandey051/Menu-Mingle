import {  useState } from "react";
import useApiData from "./useApiData";

const useSearchCard = () =>{
    const [searcCardd,setSearchCard] = useState([]);
   const listOfRest = useApiData();
   setSearchCard(listOfRest)
    
    return searcCardd;
}

export default useSearchCard