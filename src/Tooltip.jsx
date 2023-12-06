import React,{useRef,useLayoutEffect,useState,useEffect} from "react"
import { createPortal } from "react-dom"
export default (props)=>{
    const {children ,targetPositions} = props
    const tooltipRef = useRef(null);
    const [tooltipHeight,setTooltipHeight] = useState(0)
    // let now = performance.now()
    let x = 0
    let y = 0
    if(targetPositions != null){
        x = targetPositions.left
        y = targetPositions.top - tooltipHeight
        if(y < 0){
            y = targetPositions.bottom
        }

    }// we define x and y without useState bcz we want it to start it with 0 value on rerender rather than remembering the last value.
    // while (performance.now() - now < 1000) {
    // } //if we'll use this render blocking code with useEffect because it runs after renders so it will show a jitter.
    //so we should use useLayoutEffect here.
    useLayoutEffect(()=>{
        const {height} = tooltipRef.current.getBoundingClientRect();
        setTooltipHeight(height)
    },[]) // it is a repaint blocking statement function.it blocks the browser from repainting
    //which means that React guarantees that the code inside useLayoutEffect and 
    //any state updates scheduled inside it will be processed before the browser repaints the screen.
    // if setTooltipHeight has a very time taking calculation then useLayoutEffect make sure that it
    // would be happen before this component renders on the screen.
    return createPortal(<div ref={tooltipRef} style={{
        position:'absolute',
        pointerEvents : 'none',
        left : 0,
        top : 0,
        padding : '2px',
        color: 'white',
        backgroundColor : 'black',
        borderRadius : '3px',
        transform : `translate3d(${x}px, ${y}px,0)`
    }}>
    {children}
    </div>,document.body)
} //createPortal just make a portal in the element we pass on it and place the jsx there.