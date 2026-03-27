import { useState } from "react";
function Welcome(){
const[count,setCount]=useState('CLICK ME')
return(
    <button onClick={()=>setCount('WELCOME')}>{count}</button>
    
    
)
}

export default Welcome


