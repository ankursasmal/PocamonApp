 
import React, { useEffect, useState } from 'react'
import Info from './Info';
  function App() {
 let [spenner,setspenner]=useState(true)

let [pocamon,setpocamon]=useState([]);
 let[Filterpocamon,setFilterpocamon]=useState([]);
 
// function for destructruing data fron api
async function Apidata(){
 try{
   let api=await fetch('https://pokeapi.co/api/v2/pokemon');
let res=await api.json();
//  console.log(res.data);

// because some data are missing so i slice  the array 
setFilterpocamon(res.results);
setpocamon(res.results);
// for spinner
setspenner(false);

 }
 catch(error){
console.log('Data not fetch from Api due to:',error.message);
 }
}


// for call one time when page 1st time load
useEffect(()=>{
 Apidata();

  },[])


 


 
return (
    <div className='container ' >


   <div className='d-flex  justify-center ' style={{flexDirection:'column',alignItems:'center'}}  >
<a  style={{fontSize:'4vw',fontWeight:'600',margin:'20px 0'}}>pocamon Details</a>

<input type="text" placeholder='search pocamon according fristName' className='rounded-pill' style={{padding:'1vw 2vw',width:'60vw',marginTop:'15px',marginBottom:'23px',fontSize:'1.8vw'}}   onChange={(e)=>{
 e.preventDefault();
 const searchTerm = e.target.value;
 const filteredpocamons = Filterpocamon.filter(pocamon =>
   pocamon.name.match(new RegExp(searchTerm, 'gi'))
 
)
setpocamon(filteredpocamons);

}
}
/>

{pocamon ?(spenner? <img src='./spin.gif'  style={{width:'10vw'}} /> :( <> 
{ pocamon.map((values,i)=>{
  return ( 
   <div key={i}  className='shadow-lg p-3 mb-5 bg-body rounded' style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'15 20',}}   >
     <Info  url={values.url} id={i} name={values.name}/>
   
      
  </div>
  )
  })
  
  }
</>
)

 ):<a>loading....</a> }
   </div>
   
    </div>      
  )
}

export default App
