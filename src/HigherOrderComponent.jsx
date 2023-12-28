import React , {useRef,useState,useEffect} from "react";

const Hoc = (Element)=>{
    return (props)=>{
        const ref = useRef(null)
        const [width,setWidth] = useState(0)
        useEffect(()=>{
            if(ref.current) setWidth(ref.current.offsetWidth)
        },[ref])
        return <Element ref={ref} width={width} {...props}></Element>
    }
}


export default Hoc
// i have used closure here.