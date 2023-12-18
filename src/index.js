//old javascript way
/*const render = 'hello world'
parent_element = document.getElementById('root')
child_element = document.createElement('p')
child_element.innerText = render
parent_element.appendChild(child_element)*/

// new but hard react way
/*import React from "react"
import ReactDOM  from "react-dom/client"
function handleClick(msg){
    alert('pressed '+ msg)
}
const condition = false
const child_element1 = React.createElement('p',{onClick:()=> handleClick('check0')},"hello world0")
const child_element2 = React.createElement('p',{onClick:()=> handleClick('check1')},"hello world1")
const child_element3 = <div onClick={()=> handleClick(msg)}>hellow</div>
const ChildElement4 = ()=><>{condition ? child_element2 : child_element1}</>
const parent_element = ReactDOM.createRoot(document.getElementById('root'))
parent_element.render(ChildElement4())
// parent_element.render(<ChildElement4/>)
*/

import App from "./App.jsx";
import  ReactDOM  from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import {store} from './store.js'
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)