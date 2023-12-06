import React,{useState,memo} from "react";
/*
export default (props)=>{
    const [slowCounter,setSlowCounter] = useState(0);
    const {handleChange} = props
    let now = performance.now()
    while (performance.now() - now < 1000) {
        }
    const increament = ()=>{
        setSlowCounter((prev)=>prev+1)
        handleChange?.()
    }
    return <>
     I am children
     <br />
     {slowCounter}
     <br />
     <button onClick={increament}>increamet slowcounter</button>
    </>
}
*/
export default memo((props)=>{
    const [slowCounter,setSlowCounter] = useState(0);
    const {handleChange} = props
    console.log('her............')
    let now = performance.now()
    while (performance.now() - now < 1000) {
        }
    const increament = ()=>{
        setSlowCounter((prev)=>prev+1)
        handleChange?.()
    }
    return <>
     I am children
     <br />
     {slowCounter}
     <br />
     <button onClick={increament}>increamet slowcounter</button>
    </>
})