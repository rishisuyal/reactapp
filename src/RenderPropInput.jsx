import React,{useState} from "react"

export default (props)=>{
    const [value,setValue] = useState(null)
    const handleChange = (e)=>{
        setValue(e.target.value)
    }
    return (
    <>   
    <input  onChange={handleChange} type="text" />
    {props.func(value)}
    </> 
    )
}