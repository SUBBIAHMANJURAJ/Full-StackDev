import React, { useState } from 'react'

function Counter(){
    // const [currentState,setState]=useState(0) reference
    const [count,setCount]=useState(0)
return(
    <div style={{marginTop:'15%'}}>
        <button onClick={()=>setCount(count+1)}style={{alignItems:'center',marginLeft:'50%',backgroundColor:'black',color:'white',borderRadius:'50px'}}>+</button>
        <h1 style={{marginLeft:'50%'}}>{count}</h1>
        <button onClick={()=>setCount(count-1)}style={{marginLeft:'50%',backgroundColor:'black',color:'white',borderRadius:'50px'}}>-</button>
    </div>
)
}
export default Counter

