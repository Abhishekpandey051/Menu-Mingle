import { useEffect, useState } from "react";
import useOnlineStation from "../utility/useOnlineStation";

const About = () => {
  const[userData, setUserData] = useState([]);
  const onlineStatus = useOnlineStation();
  useEffect(() => {
    findData();
  }, []);

  const findData = async () => {
    const data = await fetch("https://api.github.com/users/abhishekpandey051");

    const fetchData = await data.json();
    setUserData(fetchData)
    console.log("Git Hub API", fetchData.name);
  };

  return (
    <>
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-md rounded-md p-8 mx-auto max-w-lg">
      <div className="items-center ">
      <img className="rounded-full w-[50%] items-center" src={userData.avatar_url} alt="profile img" />
      
        <h1 className="text-2xl font-bold mb-4">{userData.name}</h1>
       <p className="text-gray-700"> Github: {userData.login}</p>
        <p className="text-gray-700">Bio : {userData.bio}</p>
        </div>
      </div> 
    </div>
      <p>Status : {onlineStatus ? "🟢" : "🔴"}</p>
    </>
  );
};

export default About;
