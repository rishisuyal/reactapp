import React,{forwardRef} from "react";


export const InputBox =  (props)=>{
    console.log('InputBox props are : ',props)
    return <input ref={props.inputref} type="text" />
}

export default forwardRef((props,ref)=>{
    console.log('InputBox props are : ',props)
    return <input ref={ref} type="text" />
})