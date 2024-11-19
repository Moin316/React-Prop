import React,{useState} from 'react'
import Slide from './components/Slide.jsx'
const data =[
  {image:"https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVufGVufDB8fDB8fHww",name:"Accordion",description:"lorem ipsum",friends:false},
  {image:"https://images.unsplash.com/photo-1516297276-0fe32eb94534?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2hpdGUlMjBtZW58ZW58MHx8MHx8fDA%3D",name:"Sorium",description:"consectetur adipiscing",friends:false},
  {image:"https://images.unsplash.com/photo-1635944201548-deff78d5e429?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHdoaXRlJTIwbWVufGVufDB8fDB8fHww",name:"danjour",description:"beka bekab",friends:false},
];
function App() {
  const [val,setVal]=useState(data);
  const Change=(ind)=>{
     setVal((val)=>{
      return val.map((item,index)=>{
        if(index===ind){
          return {...item,friends:!item.friends}
        }
        else {
          return item;
        }
      })
    })
  }
  return (
        <div  className='h-screen w-full flex justify-center items-center gap-4'>
          {
            val.map((item,index)=>{
              return <Slide key={index}  values={item} index={index} Change={Change}/>
            })
          }
        </div>
  )
}

export default App