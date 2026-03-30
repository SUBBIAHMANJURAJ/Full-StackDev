import React, { useState } from 'react'

function count(){
    const[count,setcount]=useState(0)
    return(
        <div>
            <button onClick={()=>setcount(count+1)}>+</button>
            <h1>{count}</h1>
            <button onClick={()=>setcount(count-1)}>-</button>
            <button onClick={()=>setcount(1)}>reset</button>
        </div>
    )
}
export default count

