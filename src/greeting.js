import React from 'react'
import ReactDom from 'react-dom'

/* function Greeting() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
} */

/* const Greeting = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'hello world')
  )
} */

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  )
}

const Person = () => <h2>john doe</h2>
const Message = () => {
  return <p>this is my message</p>
}
ReactDom.render(<Greeting />, document.getElementById('root'))
