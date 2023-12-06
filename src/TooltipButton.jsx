import React,{useState,useRef} from "react"
import Tooltip from "./Tooltip.jsx"
export default (props)=>{
    const {data,children} = props
    const [positions,setPositions] = useState(null)
    const buttonRef = useRef(null)
    const mouseEnterEvent = ()=>{
        const rect = buttonRef.current.getBoundingClientRect();
        setPositions({
            left : rect.left,
            top : rect.top,
            right : rect.right,
            bottom : rect.bottom
        }) 
    }
    const mouseLeaveEvent = ()=>{
        setPositions(null)      
    }
    return <>
    <button ref={buttonRef} onMouseEnter={mouseEnterEvent} onMouseLeave={mouseLeaveEvent}>{children}</button>
    {positions && <Tooltip targetPositions={positions}>{data}</Tooltip>}
    </>
}// TO justify our current usecase useref is used when we want data about DOM element. but there are more works of it.