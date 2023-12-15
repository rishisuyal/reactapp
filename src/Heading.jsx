import React from "react"
import Text from "./Text.jsx"

export default (props)=>{
    const {headingText} = props
    console.log('Re-Rendering')
    return <>
    Hey I am Heading Component
    <br />
    <Text data={headingText}>Hey i am Text Component </Text>
    </>
}
