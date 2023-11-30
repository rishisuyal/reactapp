import React, {useState,useCallback} from "react"
import Button from "./Button.jsx"
import Text from "./Text.jsx"
/*const App = ()=>{
    const handelClickAction = ()=>{
        console.log('its inside')
    }
    return <Button clickAction={handelClickAction}>clickme</Button>
}*/
//module 6
/*
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
*/
//module 7
/*
export default ()=>{
 
    let msg = "Good"
    const handleClick = (param)=>{
        console.log(param)
        msg = param
    }
    return <div onClick={() => handleClick('Bad')}>{msg}</div>

}// this will not change anything since its not possible to change inside jsx without rerendering it in React.
*/
export default ()=>{
 
    let [msg,changeMsg] = useState(()=>{
        return "Good"
    })
    let [margin, changeMargin] = useState('nothing')
    const handleClick = useCallback(()=>{
        // changeMsg((prevData)=>{
        //     if (prevData == 'Good'){
        //         return 'Bad'
        //     }
        //     else{
        //         return 'Good'
        //     }
        // })
        changeMargin((prev)=>{
            if (prev == 'nothing'){
                return 'givemargin'
            }
            else{
                return 'nothing'

            }
        })
    },[])
    // return <div onClick={() => handleClick()}>{msg}</div>
    return <>
    <div className={margin}>{msg}</div>
    <Button clickAction={handleClick}>Change State</Button>
    </>

} // useState would change the jsx by rerendering it with new updated value. and the update function work "asynchronusly"

//module 7
//never use update of a state inside a big module like app.jsx coz it would rerender the whole app.jsx instead make a saperate component for whatevr you are updating for.
//by using memo with the useCallback the console.log('rerendering button')  does not writes again when updating the state.