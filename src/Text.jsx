import React, {memo,useEffect} from "react" //it stops rerendering the whole component if there is only a single change like adding one extra object into array.
const Text = memo((props)=>{
    const {children,data} = props
    useEffect(()=>{
        if(children == 1){
            console.log('Data 1 is',data)
        }
        else{
            console.log('Data 2 is',data)
        }
        },[data]) 
    return <div>{data}  </div>
})
export default Text