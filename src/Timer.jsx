import React,{useEffect,useState,useRef} from "react"
export default (props)=>{
    const [counter,setCounter] = useState(0)
    const {data} = props
    // let interval 
    let interval = useRef(null)
    useEffect(()=>{
         interval.current = setInterval(()=>{
            setCounter((prev) => prev + 1)
            // console.log('running interval....')
        },1000)
        return ()=>{
            console.log('timer is unmounted for interval id : ',interval.current)
            clearInterval(interval)
        }
    },[])
    const stopTimer = ()=>{
        console.log('stopping timer for interval id : ',interval.current)
        clearInterval(interval.current)
    } //to stop the timer on the click of the button we should have access to interval variable inside this func also
    // and point to be noted here we can't use (var interval) as global and ouside the useEffect
    // and assign the value inside the useEffect then access it on stopTimer
    // function . bcz it is not possible --> bcz we poerforming setCounter inside the useEffect which rerenders the component
    // and on rerender it again declairs the interval variable with undefined value. so therefore we
    // can't access it in stopTimer function.
    // for that we have to use useRef here.
    // useEffect(()=>{
    //     return ()=>{
    //         console.log('just to check if it runs')
    //     }
    // },[data])
    return <>
    <h2>Counter time is: <span style={{color:'red'}}>{counter}</span></h2>
    <span>{data}</span>
    <button onClick={stopTimer}>Stop Timer</button>
    </>
}