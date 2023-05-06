import React from "react";
import "./AboutUs.css";

import Typewriter from "typewriter-effect";

const AboutUs = () => {
  return (
    <div className="p-6 md:px-18 md:pt-7 mt-14 md:mt-20 flex flex-col items-center justify-between text-white footer_container text-xl">
      
      
      <div className="flex flex-col items-center justify-center py-12">
        <h1 className="">
          <Typewriter
            options={{
              strings: ["Do you want to know", "More About Us?"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p>Request For a Webinar</p>
      </div>

     
      <div className="flex flex-col items-center">

      {/* About us, Newsletter , Follow Us container */}
      <div className="flex flex-col items-center justify-between gap-11 md:flex-row">
            
            {/* About us start */}
             <div className="flex flex-col md:items-start items-center w-full md:w-1/3 ">
               <h1 className=" text-white font-serif font-extrabold text-4xl mb-3">About us</h1>
               <p className="">
                 Lorem ipsum dolar 
               </p>
               <p> sit amet consectetur adipisicing temporibus.</p>
               
             </div>
             {/* About us ended */}
   
   {/* Newsletter Section  start*/}
   
   <div className="flex flex-col md:items-start items-center  w-full md:w-1/3  ">
               <h2 className="text-white font-bold text-3xl mb-3">Newsletter</h2>
               <p className="">Stay Updated</p>
               
                 <div className="flex">
                   <p className="mt-2" >
                     <input 
                       type="text"
                       className="placeholder-black "
                       placeholder="Email"
                     />
                     </p>
                     <p className="mt-4 ">
                         <i className="text-red-60 fas fa-arrow-right cursor-pointer "></i>
                       </p>
                   </div>
                 </div>
   
   {/* Newsletter section ended */}
             
             
   
             {/* Follow us section */}
             <div className="flex flex-col md:items-start items-center  w-full md:w-1/3 ">
               <h4 className="text-white font-bold text-3xl mb-3">Follow Us</h4>
               <p className="text-muted">Let us connect ourself</p>
               <div className="flex justify-between mt-2 text-white">
                 <i className="mr-2 cursor-pointer fab fa-facebook-f"></i>
                 <i className="mr-2 cursor-pointer fab fa-instagram"></i>
                 <i className="mr-2 cursor-pointer fab fa-twitter"></i>
                 <i className="cursor-pointer fab fa-youtube"></i>
               </div>
             </div>
   
         </div>
             
      {/* About us, Newsletter, Follow us, Container  ended*/}

          
          
        </div>
        <div className="mt-24">
          <p className="text-sm ">
              Copyright ©2023 All rights reserved | This platform Hosted
              by <span className="text-pink-300 cursor-pointer">Hong Kong Professional</span>
            </p>
          </div>
    </div>
      
    
  );
};

export default AboutUs;
