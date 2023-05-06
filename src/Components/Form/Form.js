import React, { useState,useEffect } from 'react'
import "./Form.css";

function Form() {
  const [allSectors,setAllSectors]=useState([]);
  
  const [name, setName] = useState( sessionStorage.getItem("name") ? sessionStorage.getItem("name") : '' );

  const [checkBox, setCheckBox] = useState(sessionStorage.getItem("checkbox") ? sessionStorage.getItem("checkbox") : ''  );

  const [profession, setProfession] = useState( sessionStorage.getItem("profession") ? sessionStorage.getItem("profession") : 'Manufacturing' );

  const [mongodbInsertedID,setMongodbInsertedID]=useState(sessionStorage.getItem("mongodb_insertedId") ? sessionStorage.getItem("mongodb_insertedId") : '')

  useEffect(()=>{

    window.sessionStorage.setItem('name',name);
  window.sessionStorage.setItem('checkbox',checkBox);
  window.sessionStorage.setItem('profession',profession);

  // const allData={'name':name,'email':email,'message':message};
  // const myObjString=JSON.stringify(allData);
  // window.sessionStorage.setItem("myObj",myObjString)

  },[name,checkBox,profession])


  // pre-populate input field with stored data...
  useEffect(()=>{
    const storedName= sessionStorage.getItem('name');
    const storedCheckBox=sessionStorage.getItem('checkbox');
    const storedProfession=sessionStorage.getItem('profession');

    if(storedName){
      setName(storedName)
    }
    
    if(storedCheckBox){
      setCheckBox(storedCheckBox)
    }
    if(storedProfession){
      setProfession(storedProfession)
    }
  },[])

  useEffect(()=>{
    fetch("http://localhost:5000/userSector")
    .then(res=>res.json())
    .then(data=>setAllSectors(data))
  },[])

// Updating user function::::::::::
function UpdateUser(mongodbInsertedID,submittedData){
  fetch(`http://localhost:5000/users/${mongodbInsertedID}`,{
    method:"PUT",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(submittedData)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
    if(data.modifiedCount===1 ){
     alert("You have updated data")
      
    }
    
  })

}

// Insert User Data Function::::::
function insertUserData(submittedData){
  fetch('http://localhost:5000/users',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(submittedData)
        })
        .then(res=>res.json())
        .then(dataConfirmation=>{
         
          if(dataConfirmation.acknowledged){
          alert("your data is submitted!!")
           
          // Save form data to session storage
        sessionStorage.setItem("mongodb_insertedId",(dataConfirmation.insertedId));
        setMongodbInsertedID(dataConfirmation.insertedId)
          }
        })
}




  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    
    // Do something with the form data, e.g. send it to a server
    const submittedData={name,checkBox,profession};
    console.log(submittedData);
    
  if(mongodbInsertedID ){
    

    UpdateUser(mongodbInsertedID,submittedData)
  
  }

  else{

    insertUserData(submittedData)

  }
    
  }

  

    
  return (
    <div className='py-20'>
      
      <p className='text-white text-lg md:text-2xl text-center'>Please enter your name and pick the Sectors you are currently involved in.</p>

<form type="form" onSubmit={handleSubmit} className='max-w-xl mx-auto 
    p-4  sm:p-8 md:p-12 lg:p-16 border-4 border-white rounded-3xl shadow-md bg-gray-900 mt-6 '>

        {/* Name Input Field */}
        <p className=' mb-4 font-bold text-xl'>
            <label htmlFor='name' className='mb-1 text-white'>Name</label><br />

        <input id='name' placeholder='enter your name' required type="text" defaultValue={  name } onChange={(e) => setName(e.target.value)} className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' pattern="[A-Za-z ]+" title="Enter only alphabetic characters"   />
      
      </p>

      {/* Sector select Option Field */}
      <p className=' mb-4 font-bold text-md'>
          <label htmlFor="sector" className='text-white'>Sectors</label><br />

        <select id="sector" required defaultValue={profession} onChange={(e) => setProfession(e.target.value)} className='w-full block px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
      <option  defaultValue={profession}>{profession}</option>

         { 

         allSectors.map((pd)=> <option key={pd._id} value={ pd.sector}>{pd.sector}</option>)
        
         }
          
        </select>
      
      </p>

      <p>
         
         <input className='w-4 h-4' id='checkbox' checked={checkBox}  onChange={(e) => setCheckBox(e.target.checked)}  required  type="checkbox"  />
         <label htmlFor="checkbox" className='text-white ml-2'>Agree to Terms & Conditions</label>  
         </p>

         <p>
            <input  className='text-white bg-green-700 border-2  mt-2 px-7 py-1 rounded cursor-pointer hover:bg-orange-700'  type="submit" value="Save" />
            </p>
    </form>

    </div>
  )
}

export default Form