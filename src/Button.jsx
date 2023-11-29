import React from "react"
const Button = (props) => {
    const children = props 
    const {clickAction} = props
    const handleClick = () => {clickAction?.()}
    return <button onClick={handleClick}>{children?.children}</button>
}
export default Button