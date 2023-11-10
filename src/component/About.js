
import React  from 'react'
import useOnlineStation from '../utility/useOnlineStation'

const About = () => {
  const onlineStatus = useOnlineStation();
  // useEffect(()=>{
  //   findData();
  // },[])

  // const findData= async()=>{
  //   const data = await fetch("https://us-central1-faang-path.cloudfunctions.net/faangpath/misc/formSelectors")
  //   const fetchData = data.json();
  //   console.log("Git Hub API",fetchData)
  // }

  return (
    <div>
      
      <h1>About Us Page</h1>
        <h2>This is the abiut us page</h2>

<p>Online Status: {onlineStatus ? "Green" : "red"}</p>

    </div>
  )
}

export default About

