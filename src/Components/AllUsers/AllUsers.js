import React, { useEffect, useState } from 'react'
import "./AllUsers.css";
import { Link } from 'react-router-dom';

function AllUsers() {
    const [allUserProfile,setAllUserProfile]=useState([]);
    useEffect(()=>{
        fetch("https://hongkong-professionals.vercel.app/users")
        .then(res=>res.json())
        .then(data=>setAllUserProfile(data))
      },[]);
      console.log(allUserProfile);
  return (
    <>
    <p className='font-bold text-center text-white text-3xl mx-5 mb-7'>Total Number of Users: {allUserProfile.length}</p>
    
    <div className=' standard_font grid gap-3 md:grid-cols-3  grid-cols-1'>

        {
            allUserProfile.map(pd=><div className='border border-white mx-auto rounded-lg p-5 md:p-10 h-65 w-full md:w-20% mb-7 bg-black text-center text-white text-lg shadow-lg' key={pd._id}> 

                <p > <span className='font-extrabold'>User name:</span>  {pd.name}</p>
                <p><span className='font-extrabold'>Sector:</span> {pd?.sector}</p>

                <p className='mt-5'>
                    <Link to={`/updateUserProfile/${pd._id}`}>
                    <button className='bg-white text-black px-2 py-.5 rounded hover:bg-green-500'>Update Now!</button>
                    </Link>
                </p>
            </div>)
        }
    </div>
    </>
  )
}

export default AllUsers