//old javascript way
/*const render = 'hello world'
parent_element = document.getElementById('root')
child_element = document.createElement('p')
child_element.innerText = render
parent_element.appendChild(child_element)*/

// new but hard react way
import React from "react"
import ReactDOM  from "react-dom/client"
const child_element1 = React.createElement('p',{},"hello world")
const child_element2 = React.createElement('p',{},"hello world")
const child_element3 = <>hellow</>
const parent_element = ReactDOM.createRoot(document.getElementById('root'))
parent_element.render(child_element3)