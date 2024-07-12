import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
function Github(){

    // const [data,setData] = React.useState([])
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/LauDaWei')
    //     .then((res) => res.json())
    //     .then(data => setData(data))
    // },[])
    const data = useLoaderData();
    return(
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} width={300} alt="" />
    </div>
    )
}
export default Github

//load the page when hovering for optimization
export const githubInfoLoader = async () =>{
    const res = await fetch('https://api.github.com/users/LauDaWei')
    return res.json();
}