import { useState } from 'react'
function Toggle(){
    const[value,setvalue]=useState("Status Off");
    function changevalue(){
        setvalue("Status On");

    }
    return(
        <>
        <h1>{value}</h1>
        <button onClick={changevalue}>Toggle</button>
        </>
    );
}
export default Toggle