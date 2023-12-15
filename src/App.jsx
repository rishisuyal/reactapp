// if we want to send something from parent to child we use props
// and if we want to send something from child to parent we define a function in parent and 
//bind it with a prop than call the funcion from child with data as a arguments and recieve it on the parent side function as parameter.
import React, {useState,useCallback,useEffect, useRef, useMemo, lazy, Suspense} from "react"
import Button from "./Button.jsx"
// import Text from "./Text.jsx"
import TooltipButton from "./TooltipButton.jsx"
import Inputbox,{InputBox} from "./InputBox.jsx"
import CallbackParent from "./CallbackParent.jsx"
import PrintTable from "./PrintTable.jsx"
import Heading from "./Heading.jsx"
const Text = lazy(()=> import("./Text.jsx"))
// import { cli } from "webpack"
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
/*
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
*/
//module 7
//never use update of a state inside a big module like app.jsx coz it would rerender the whole app.jsx instead make a saperate component for whatevr you are updating for.
//by using memo with the useCallback the console.log('rerendering button')  does not writes again when updating the state.
//although memo stops rerendering whole component again and again but here handleclick function itself creates again by using the usestate therefore
// Button component also rerenders because it thinks the handleclick pros as new, therefore it is neccessary here to define handleClick as a Callback by using
//useCallback function.
//please ensure that you have provided a dependency array as empty here.
//module 8
// https://github.com/acdlite/react-fiber-architecture read this mendatory.

//module 9
/*
export default ()=>{
    let [data1,setdata1] = useState(0)
    let [data2,setdata2] = useState(0)
    // useEffect(()=>{
    //     console.log('useEffect....1')
    // },[data1]) // if we dont provide the dependency array it will first run on mount and then in every rerender.
    // useEffect(()=>{
    //     console.log('useEffect....2')
    // },[data2]) 
    const handleClick1 = useCallback(()=>{
        setdata1((prev)=>{
            return prev + 1;
        })
    },[])
    const handleClick2 = useCallback(()=>{
        setdata2((prev)=>{
            return prev + 1;
        })
    },[])
    return <>
    <Text data={data1}>1</Text>
    <Button clickAction={handleClick1}>Click</Button>
    <Text data={data2}>2</Text>
    <Button clickAction={handleClick2}>Click</Button>
    </>

}
export default ()=>{
    const [flag,changeFlag] = useState(true)
    const toggleTimer = ()=>{
        changeFlag((prev) => !prev)
    }
    return <>
    {flag && <Timer data="A Good Clock"></Timer>}
    <button onClick={toggleTimer}>Toggle Timer</button>
    </>
}// if flag true render timer
*/
//module 10
//useLayouteffect
/*
export default ()=>{
    return <>
    <TooltipButton data={
        <div>This Tooltip does not fit above the button <br /> That is why it is showing below insted</div>
    }> Hover me (tooltip above)
    </TooltipButton>
    <div style={{height:50}}/>
    <TooltipButton data={
        <div>This Tooltip fits above the button</div>
    }>Hover me (tooltip below)
    </TooltipButton>
    <div style={{height:50}}/>
    <TooltipButton data={
        <div>This Tooltip fits above the button</div>
    }>Hover me (tooltip below)
    </TooltipButton>
    </>
}
*/
//module 11
//useRef
//it is a type of hook the lets you refrence a value that's not needed for rendering 
// in comparision with useState that we need when we want to refrence a value that we want in every rerender.
// as in module 10 we saw that we used it for getting DOM element values.
// but here we'll see it is majorly work as something else.however we used it for geting DOM element.
// one interview question can be as diffrence between useRef and useState.
/*
export default ()=>{
    let x = 0
    const ref = useRef(0)
    const [stateVar,changeStateVar] = useState(0)
    return <>
    <button onClick={()=>{x + 1}}>change local variable</button>
    <button onClick={()=>{ref.current = ref.current + 1}}>change ref</button>
    <button onClick={()=>{changeStateVar((prev)=>prev+1)}}>change state</button>
    <div>
        <span>{x}</span>
        <br />
        <span>{ref.current}</span>
        <br />
        <span>{stateVar}</span>
    </div>
    </>
} // on clicking change ref button it does not reflect change on the screen but when clicking 
// on change state button it then shows the increamented counts depends upon how much time you clicked 
// the change ref button bcz on clicking change state button it rerenders the whole component but changing ref does not cause a rerender.
// and on rerender bcz ref remembers the last value so it shows it.
// also on rerender the value of x variable again assigns with 0.
// ref was able to retain its value bcz it has kind of a memory that persists every render cycle.
// you can relate it with that a++ and ++a example in c.
//this is why it is a type of hook the lets you refrence a value that's not needed for rendering but something else.
// think of this a x as a human with no superpowers. ref as avarage superhuman and stateVar as superman.
*/
// where can we use useRef.
// answere.---->
/*
export default ()=>{
    const inputRef = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)
    const changeInputRef = ()=>{
        if(inputRef.current){
            console.log(inputRef.current) // it gives us the input element on console.
            // focus is just a property of that input element
            console.log(inputRef.current.getBoundingClientRect()) // dont misuse it coz this is very expensive calculation
            inputRef.current.focus()
        }
    }
    const changeInputRef2 = ()=>{
        if(inputRef2.current){
            console.log(inputRef2.current.getBoundingClientRect()) // dont misuse it coz this is very expensive calculation
            inputRef2.current.focus()
        }
    }
    const changeInputRef3 = ()=>{
        if(inputRef3.current){
            console.log(inputRef3.current.getBoundingClientRect()) // dont misuse it coz this is very expensive calculation
            inputRef3.current.focus()
        }
    }
    return <>
    <h1>Timer Example for useRef</h1>
        <Timer data="A Good Clock&nbsp;&nbsp;"></Timer>
    <br />
    <h1>DOM example for useRef</h1>
    <input ref={inputRef} type="text" name="nothing" id="no" />
    <button onClick={changeInputRef}>Focus inputbox</button>
    <br />
    <h2>forwardRef Example</h2>
    <h3>There are Two ways: </h3>
    <h3>1. naming the ref as a custom named prop</h3>
    <InputBox inputref={inputRef2}></InputBox>
    <button onClick={changeInputRef2}>Focus inputbox2</button>
    <br />
    <h3>2. use forwardRef</h3>
    <Inputbox ref={inputRef3}></Inputbox>
    <button onClick={changeInputRef3}>Focus inputbox3</button>
    </>
} // <InputBox ref={inputRef2}></InputBox> here in line 265 because ref is a reserved keyword we cant use it to pass a prop within parent-child.
*/
//module 12 useCallback
//useCallback is a React Hook that lets you cache a function definition between re-renders not the Value.
// what it means is let's consider a function as
/*
 const func = ()=>{

 }
*/
// whenver react rerenders a component then the function also will be recreated in the memory
// which is unefficient.
// lets consider we use a State-variable and if we use it inside the func that mentioned above
// will be unable to know what is the new value of that variable without creating function again.
// we can use useCallback which caches the function defination and that's how it prevents react to make the 
//  function defination again on rerender cycles.
//here is the proof ---->
/*
export default ()=>{
    const [count,setCount] = useState(0)
    const handleClick = ()=>{
        setCount((prev)=>prev+1)
        console.log('outermost Clicked')
    }
    return <>
    {count}
    <br />
    i am outermost<>&nbsp;</>
    <button onClick={handleClick}>count++</button>
    <br />
    <CallbackParent></CallbackParent>
    </>
}
*/
// here when clicking on count++ the App gets rerendered -> hence the CallbackParent --> hence the CallbackChild 
// bcz CallbackChild is slow by 1000ms therefore the render of the state count would take 1000ms to reflect the change on this render cycle
//however console.log prints immidiately because js doesnot waits for anything as we know.
// for this solution we can wrap CallbackChild with memo but we can see the prop from Callbackparent named handleChange
// also rerender and therefore react will consider it as a change so, the use of memo only would not be able to stop rerendring the 
// CallbackChild component bcz memo only prevents rerender untill unless props does not changes.
// Therefore in this Condition we have to have use useCallback to cache the handleChange function 
// (that is inside the CallbackParent component) and 
// have been send as a prop to CallbackChild so that the function does not recreated and memo do not 
// detect any change in the prop itself hence the CallbackChild will not Rerendered so lag will be gone.
// useCallback has a dependency array which can contain rective-variables(*props, state, and all the variables and functions declared directly inside your component body)
// if dependency array changes the function will be created again.
// but what if the function wrapped inside the useCallback using a prop value from parent component?
// then the value would not be dynamic inside that function because function has been 
// cached with the  value that was on its first render.
// in this perticular condition if we want the latest value everytime inside the function
// we have to stop caching that function and start its rerender cycles for that perticular prop
// for that we can pass that prop into the dependency array.
// also there is n harm in using useCallback normally with empty dependency array. it would work normally.however you can always
// tweak it with passing values on dependency array.


// Module 13
// useMemo or memoization.
/*
export default ()=>{
    const [count1,setCount1] = useState(0)
    const [count2,setCount2] = useState(0)
    return <>
    {<span style={{color:'darkred'}}>{count1}</span>} &nbsp; <button onClick={()=> setCount1((prev)=> prev+1)}>count1++</button><br />
    {<span style={{color:'red'}}>{count2}</span>} &nbsp; <button onClick={()=> setCount2((prev)=> prev+1)}>count2++</button>
    <PrintTable num={count2}></PrintTable>
    </>
}
*/
// here as we can see if any of button will be clicked then the PrintTable will be re-render.
// and because inside PrintTable the function getTable is very slow so ..
// One solution is that we can use memo Api itself covering the whole exported component.
// because it will only rerender the PrintTable component when count2 would be change.
// Other solution is that we can use useMemo hook covering the getTable function call,
// with passing prop num in dependency array.
// By doing this the count1++ would have no effect of slow Function getTable.

//module 14
//memo 
/*
export default ()=>{
    const [count1,setCount1] = useState(0)
    const [count2,setCount2] = useState(0)
    // const myObj = {key:'value'}
    const myObj = useMemo(()=>{key:'value'},[])
    return <>
    {<span style={{color:'darkred'}}>{count1}</span>} &nbsp; <button onClick={()=> setCount1((prev)=> prev+1)}>count1++</button><br />
    {<span style={{color:'red'}}>{count2}</span>} &nbsp; <button onClick={()=> setCount2((prev)=> prev+1)}>count2++</button>
    <PrintTable num={count2} obj={myObj}></PrintTable>
    </>
}
*/
// we already know about this Api but 
// one thing is here that if we define a local "non-premitive data-types" and pass
// it to the slow component like PrintTable using memo Api
// then on rerender except "primitive data-types" it recreates or redeclares the variable
// causing change in memo prop.
// note :- memo performes a "shallow comparision".which means that it uses Object.is() method
// the Object.is() static method determines whether two values are the same value.
// so Object.is(3,3) --> gives --> true Object.is({},{}) --> gives --> false. 3 is permitive and {} is non-premitive.
// or we can do something like const obj = useMemo(()=> ['a','b'],[]).

//module 15
// lazy Api
// lazy lets you defer loading component’s code until it is rendered for the first time.
// watch bundle.js inside network selecting all.
/*
export default ()=>{
    const [showText,toggleText] = useState(false)
    return <>
        <button onClick={()=>toggleText(!showText)}>Toggle Text</button>
        <br />
        
        {showText && <Suspense fallback={<div>i am Loading......</div>}>
            <Text>Here is Your Text!</Text>
        </Suspense>}
    </>
}
*/
// the Text component already added in our bundle.js 
// we can only load the component Text.jsx inside bundle.js
// when we need it.
// we would import Text component only when we need it.
// we have use lazy to load Text component after clicking the button
// we can see in network now another js file instead of bundle.js appears.
// which is actually the file of Text.jsx
// note :- we should use Suspense Component by wrapping Text inside it.
// Suspense ==> <Suspense> lets you display a fallback until its children have finished loading.
// i have implimented a manual slowness in Text.jsx so that i am Loading..... 
// will show first then the Real component.
// but once it loaded fist time it get cached and then we would not see i am Loading prompt
// untill api in network calls again or we refresh the page basically.
//  we should only use lazy with those components which are not shown on first load.
// we should only use lazy with components like dropdown, popups etc. which basically comes on click of something.

// Module 16
// createContext and useContext Hook
/*
export default ()=>{
    const  heading = "bruhhh"

    return <>
    <Heading headingText={heading}></Heading>
    </>
}*/
// point to be notice here is that heading variable is firstly passed to Heading component from App component
// then it is again passed to Text Component from Heading Component 
// if the children will be TOo Deep in the Tree then it would be time comsuming by passing the value like this
// this is called prop drilling.
// and not a good practice.
//Context lets the parent component make some information available to any component in the tree below it
//—no matter how deep—without passing it explicitly through props.
// once you define a context on a parent that perticular data will be availible across whole tree.


import { ThemeContext } from "./context.js"
import Navbar from "./Navbar.jsx"

export default ()=>{
    const [theme,setTheme] = useState('dark')

    return <>
        <ThemeContext.Provider value={[theme,setTheme]}>
            <Navbar></Navbar>
            <br />
            <Heading></Heading>
        </ThemeContext.Provider>
    </>
}

// now what we see from here is that 
// we does not have to pass an value to the Navbar and from navbar i do not passed any value to the Button component
// but Button component did get the value  of theme and the statechange function that is setTheme
// which has been defined inside the root component.
// Note:- i have shown the useContext Hook inside the Button component.
// For more information please refer the Button component itself.
// point to be noted here is that the Navbar then the BUtton Component and the Heading both components are re-rendring 
// while changing the value of  theme from Button component 
// so we have to use it wisely.