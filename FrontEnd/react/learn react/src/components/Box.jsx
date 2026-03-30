import { useState } from "react";
function Box(){
    const[isClicked,setIsClicked]=useState(false)
    return(
        <div id="box" onClick={()=>setIsClicked(true)}
        style={{
            backgroundColor:isClicked?"yellow":"white",
            color:isClicked?"red":"black",
            padding: "20px",
                width: "150px",
                textAlign: "center",
                cursor: "pointer",
                border: "1px solid black"
            
        }}>
            Color box
        </div>
    )
}
export default Box