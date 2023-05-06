import React, { useEffect, useState } from 'react'
import "./AllUsers.css";

function AllUsers() {
    const [allUserProfile,setAllUserProfile]=useState([]);
    useEffect(()=>{
        fetch("https://hk-pro-server-production.up.railway.app/userSector")
        .then(res=>res.json())
        .then(data=>setAllUserProfile(data))
      },[]);
      
  return (
    <>
    <p className='font-bold text-center text-white text-3xl mx-5 mb-7'>Total Number of Users: {allUserProfile.length}</p>
    
    <div className=' standard_font grid gap-3 md:grid-cols-3  grid-cols-1'>

        {
            allUserProfile.map(pd=><div className='border border-white mx-auto rounded-lg px-5 py-14 md:px-10 md:py-16 h-65 w-full md:w-20% mb-7 bg-orange-500 text-center text-white text-lg shadow-lg' key={pd._id}> 

                <p > <span className='font-extrabold'>User name:</span>  {pd.name}</p>
                <p><span className='font-extrabold'>Sector:</span> {pd?.sector}</p>

                
            </div>)
        }
    </div>
    </>
  )
}

export default AllUsers