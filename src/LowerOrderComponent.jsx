import React, { forwardRef } from "react"
import Hoc from "./HigherOrderComponent.jsx"
const Loc = (props,ref)=>{
    return <div ref={ref}>Hi i Am HOC my width is: {props.width}</div>
}

export default Hoc(forwardRef(Loc))