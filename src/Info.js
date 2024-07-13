import React, { useEffect, useState } from 'react'

function Info({url,id,name}) {
    let [data,setdata]=useState({});
    let [shownpocamonId, setShownpocamonId] = useState(null);
    let [see,setsee]=useState(true);

    let fetchAllpocomonDetail=async()=>{
        let res=await fetch(url);
let data=await res.json()
setdata(data)
    }
useEffect(()=>{
 fetchAllpocomonDetail()
},[])

// let v=data?.ability[0].name
 
     //  onclick pocamonDetail appear in rigth side
  let handelShowDetail = (e, pocamonId) => {
    e.preventDefault();
     setShownpocamonId(prevpocamonid => prevpocamonid === pocamonId ? null : pocamonId);
   }
  return (
<>
 
    <div  className='m-3 ' style={{width:'36vw' ,display:'flex',flexDirection:'column',alignItems:'center' }}  >
    <img src={data?.sprites?.back_default} className='rounded-circle' style={{width:'20vw',height:'20vw'}} value={id} onClick={(e) => handelShowDetail(e,id)}/>
  <h1 style={{fontWeight:'600',fontSize:'4vw',color:'#3495e1'}}>{name}</h1>

    </div>
{/*  show on click */}
{shownpocamonId === id ? 
 <div  className='mr-10 ' id={id} style={{width:'36vw' }}>

<h3 style={{fontSize:'2.3vw'}}><span style={{color:'red',fontSize:'2.3vw'}}>Ability:</span>{" "}{data.abilities[0].ability.name }</h3>
<h3 style={{fontSize:'2.3vw'}}><span style={{color:'red',fontSize:'2.3vw'}}>Forms:</span>{" "}{data.forms[0].name}</h3>
<h3 style={{fontSize:'2.3vw'}}><span style={{color:'red',fontSize:'2.3vw'}}>Species:</span>{" "}{data.species.name}</h3>

<h3 style={{fontSize:'2.3vw',fontWeight:'600',color:'#7281d4'}} onClick={()=>{see?setsee(false):setsee(true)}}>Other Info... </h3>
 
{!see?  
<div style={{display:'flex',flexDirection:'column'}}>
<h3 style={{fontSize:'2vw',color:'blue'}}> Moves Details </h3>

<div style={{display:'flex',alignItems:'center',overflowY:'auto'}}>
 
    {
         data?.moves?.map((move,i)=>{
return(
    <div key={i} style={{display:'flex',alignItems:'flex-start',flexDirection:'column',margin:'2vw',padding:'2vw',backgroundColor:'grey',borderRadius:'1.2vw',}}>
           <h3 style={{fontSize:'1.5vw'}}><a style={{fontSize:'1.5vw',color:'#88c4ce',fontWeight:'500'}}>Moves:</a>{" "}{move.move.name}</h3>
          <h3 style={{fontSize:'1.5vw'}}><a style={{fontSize:'1.5vw',color:'#88c4ce',fontWeight:'500'}}>Methods:</a>{" "}{move.version_group_details[0].move_learn_method.name }</h3>
        </div>
)
        })
     }
 
</div>


{/* not distructure */}
{/* <h3 style={{fontSize:'2vw',color:'blue'}}> Version Details </h3> */}

{/* <div style={{display:'flex',alignItems:'center',overflowY:'auto'}}>
<img src={data?.sprites.versions.generation-i.red-blue.back_default} className='rounded-circle' style={{width:'10vw',height:'10vw',margin:'3vw'}}  />
<img src={data?.sprites.versions.generation-i.yellow.back_default} className='rounded-circle' style={{width:'10vw',height:'10vw'}}  />

<img src={data?.sprites.versions.generation-ii.crystal.back_default} className='rounded-circle' style={{width:'10vw',height:'10vw'}}  />
<img src={data?.sprites.versions.generation-ii.gold.back_default} className='rounded-circle' style={{width:'10vw',height:'10vw'}}  />
<img src={data?.sprites.versions.generation-ii.silver.back_default} className='rounded-circle' style={{width:'10vw',height:'10vw'}}  />
<img src={data?.sprites.versions.generation-iii.emerald.front_default} className='rounded-circle' style={{width:'10vw',height:'10vw'}}  />
<img src={data?.sprites.versions.generation-iii.firered-leafgreen.back_default} className='rounded-circle' style={{width:'10vw',height:'10vw'}}  />
<img src={data?.sprites.versions.generation-iii.ruby-sapphire.back_default} className='rounded-circle' style={{width:'10vw',height:'10vw'}}  />
<img src={data?.sprites.versions.generation-iv.diamond-pearl.back_default} className='rounded-circle' style={{width:'10vw',height:'10vw'}}  />
<img src={data?.sprites.versions.generation-iv.heartgold-soulsilver.back_default} className='rounded-circle' style={{width:'10vw',height:'10vw'}}  />
<img src={data?.sprites.versions.generation-iv.platinum.back_default} className='rounded-circle' style={{width:'10vw',height:'10vw'}}  />
  
 
</div> */}
</div>:null}

</div>:null}

 
    

    </>
 
  )
}

export default Info
