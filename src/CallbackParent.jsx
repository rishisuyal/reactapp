import React,{useCallback} from "react";
import CallbackChild from "./CallbackChild.jsx";
/*
export default ()=>{
    const handleChange = ()=>{
        console.log('Hey there is a Change occured.')
    }
    return <>
    I am Parent
    <br />
     <CallbackChild handleChange={handleChange}></CallbackChild>
    </>
}
*/
export default ()=>{
    const handleChange = useCallback(()=>{
        console.log('Hey there is a Change occured.')
    },[])
    return <>
    I am Parent
    <br />
     <CallbackChild handleChange={handleChange}></CallbackChild>
    </>
}
