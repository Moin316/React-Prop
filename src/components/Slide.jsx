import React from 'react'

function Slide({values,index,Change}) {
    const {image,name,description,friends}=values;
  return (
        <div className='w-52 bg-slate-600 rounded-md overflow-hidden'>
            <div className='w-full h-36    bg-red-400'> 
                <img className='w-full h-full object-cover object-[top]' src={image} alt='Slide' />
            </div>
            <div className='w-full p-3 '>
                <h1>{name}</h1>
                <h2>{description}</h2>
            <button onClick={()=>Change(index)} className='mt-4 px-3 py-1 bg-sky-600 rounded-md overflow-hidden'>
                {values.friends?"friends":"Add Friends"}
            </button>
            </div>
        </div>
    
  )
}

export default Slide