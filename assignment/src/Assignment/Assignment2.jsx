import{useState} from 'react'
export function Character_Counter(){
    const [text,setText]=useState("");
    function handleChange(e){
        setText(e.target.value);}
        return(
            <>
            <h1>Character Counter</h1>
            <input type="text" value={text} onChange={handleChange} placeholder="Type Something..."/>
            <p>Characters type:{text.length}</p>
            </>
        )
    }
export default Character_Counter