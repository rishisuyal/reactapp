import React from "react"
import Button from "./Button.jsx"
const App = ()=>{
    const handelClickAction = ()=>{
        console.log('its inside')
    }
    return <Button clickAction={handelClickAction}>clickme</Button>
}

export default App // Default export : that can be imported by import App , we can give any name we want like import Appjss
// export {App} // Named export : that can be imported by import {App}
//only one default export allowed