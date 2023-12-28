import React, { forwardRef } from "react"
import Hoc from "./HigherOrderComponent.jsx"
const Loc = (props,ref)=>{
    return <div ref={ref}>Hi i Am HOC my width is: {props.width}</div>
}

export default Hoc(forwardRef(Loc))
//Here i have passed the Loc that is a function (which contains a return jsx statetment) to Hoc.
// point to be noted here is now whenever some component will embbed this current <LowerOrderComponent/> in its jsx
// then it will first call the Hoc function present inside HigherOrderComponent (which again contains a function that returns a jsx with Loc inside)
//so therefore for This LowerOrderComponent the first Parent Component Would be HigherOrderComponent itself
// and whatever prop we will define inside Hoc would be pass to Loc 
// also as child component should be enclosed inside a forwardRef to use a ref changes or calculatations inside the Parent Component
// therefore i have enclosed Loc inside forwardRef in order to pass a useRef value from Hoc to Loc.