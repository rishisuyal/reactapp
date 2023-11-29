import React, {memo} from "react" //it stops rerendering the whole component if there is only a single change like adding one extra object into array.
const Text = memo((props)=>{
    const {children} = props
    console.log(children)
    console.log()
    return <div>{children}</div>
})
export default Text