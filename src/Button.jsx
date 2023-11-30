import React, {memo} from "react"
const Button = memo((props) => {
    console.log('rerendering button') 
    //it rerenders always when we use useState update
    const children = props 
    const {clickAction} = props
    const handleClick = () => {clickAction?.()}
    return <button onClick={handleClick}>{children?.children}</button>
})
export default Button
//module 7
//by using memo with the useCallback the console.log('rerendering button')  does not writes again when updating the state.