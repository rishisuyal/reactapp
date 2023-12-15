// import React, {memo} from "react"
// const Button = memo((props) => {
//     console.log('rerendering button') 
//     //it rerenders always when we use useState update
//     const children = props 
//     const {clickAction} = props
//     const handleClick = () => {clickAction?.()}
//     return <button onClick={handleClick}>{children?.children}</button>
// })
// export default Button
//module 7
//by using memo with the useCallback the console.log('rerendering button')  does not writes again when updating the state.
// memo prevents rerender component untill unless the prop changes.
//module 8
//module 9
import React, {memo,useContext} from "react"
import { ThemeContext } from "./context.js"
const Button = memo((props) => {
    const [themeValue,setTheme] = useContext(ThemeContext)
    console.log('rerendering button',themeValue) 
    //it rerenders always when we use useState update
    const children = props 
    const {clickAction} = props
    const handleClick = () => {clickAction?.() 
        setTheme((prev)=> prev === 'dark' ? 'light' : 'dark')}
    return <button onClick={handleClick}>{children?.children} {themeValue}</button>
})
export default Button
// here i have used the usedContext Hook for retrieving the value of the theme 
// which has been define into the App component That is the root itself.