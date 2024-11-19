import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
function Card() {
  const [ val , setVal ] = useState(false);
  return (
    <div className='bg-sky-100 h-screen w-full flex items-center justify-center'>
    <div className='bg-blue-200 h-36 w-60 rounded-md flex overflow-hidden relative'>
    <img src='https://images.unsplash.com/photo-1580139644189-14a08f064717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHR1cmtleXxlbnwwfHwwfHx8MA%3D%3D' className={`w-full h-full object-cover shrink-0 ${val===false?"-translate-x-[0%]":"-translate-x-[100%]"} transition-all duration-300`}>
    </img>
    <img src='https://images.unsplash.com/photo-1668858865415-5a6a877c43eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHR1cmtleXxlbnwwfHwwfHx8MA%3D%3D' className={`w-full h-full object-cover shrink-0 ${val===false?"-translate-x-[0%]":"-translate-x-[100%]"} transition-all duration-300`}>
    </img>
    <span onClick={()=>setVal(!val)} className='absolute flex justify-center items-center w-10 h-10 bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%] bg-[#dadada8b] rounded-full'>
    <FaArrowRight />
    </span>
    </div>
    </div>
  )
}

export default Card