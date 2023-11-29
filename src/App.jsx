import React, {useState} from "react"
import Button from "./Button.jsx"
import Text from "./Text.jsx"
/*const App = ()=>{
    const handelClickAction = ()=>{
        console.log('its inside')
    }
    return <Button clickAction={handelClickAction}>clickme</Button>
}*/

const App = ()=>{
    // const data = [
    //     {id:'a',text:'text1'},
    //     {id:'b',text:'text2'},
    //     {id:'c',text:'text3'},
    //     {id:'d',text:'text4'},
    //     {id:'e',text:'text5'},
    //     {id:'f',text:'text6'},
    //     {id:'g',text:'text7'},
    //     {id:'h',text:'text8'}
    // ]
    const [data , setData] = useState(
        [
            {id:'a',text:'text1'},
            {id:'b',text:'text2'},
            {id:'c',text:'text3'},
            {id:'d',text:'text4'},
            {id:'e',text:'text5'},
            {id:'f',text:'text6'},
            {id:'g',text:'text7'},
            {id:'h',text:'text8'}
        ]
    )
    const addMoreData = () => {
        setData((prevData) => [{id:'i',text:'text9'},...prevData])
    }
    // return <Text>{data[0].text}</Text>
    // return <>
    // <Text>{data[0].text}</Text>
    // <Text>{data[1].text}</Text>
    // <Text>{data[2].text}</Text>
    // <Text>{data[3].text}</Text>
    // <Text>{data[4].text}</Text>
    // <Text>{data[5].text}</Text>

    // </>
    // return <> //react.development.js:210 Warning: Each child in a list should have a unique "key" prop.
    // {
    //     [
    //         <Text>{data[0].text}</Text>,
    //         <Text>{data[1].text}</Text>,
    //         <Text>{data[2].text}</Text>,
    //         <Text>{data[3].text}</Text>,
    //         <Text>{data[4].text}</Text>,
    //         <Text>{data[5].text}</Text>
    //     ]
    // }
    // </>
    return <>
    {data.map((item,index) => <Text key={item.id}>{item.text}</Text>)}
    <Button clickAction={addMoreData}>Add More Data</Button>
    </>//warning error gone but react says dont use index.. instead use internal keys like id here. for performance
}
export default App // Default export : that can be imported by import App , we can give any name we want like import Appjss
// export {App} // Named export : that can be imported by import {App}
//only one default export allowed