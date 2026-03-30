import { useState } from "react";
function Welcome(){
    const[count,setCount]=useState("Welcome")
    return(
        <button onClick={()=>setCount(count==="Welcome"?"Hello Students":"Welcome")}>{count}</button>
    )
}

export default Welcome

