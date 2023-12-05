import React,{useEffect,useState} from "react"
export default (props)=>{
    const [counter,setCounter] = useState(0)
    const {data} = props
    useEffect(()=>{
        let interval = setInterval(()=>{
            setCounter((prev) => prev + 1)
            console.log('running interval....')
        },1000)
        return ()=>{
            console.log('timer is unmounted')
            clearInterval(interval)
        }
    },[])
    useEffect(()=>{
        return ()=>{
            console.log('just to check if it runs')
        }
    },[data])
    return <>
    <h1>Counter time is: {counter}</h1>
    <span>{data}</span>
    </>
}