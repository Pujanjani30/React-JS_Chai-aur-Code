import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/* function MyApp(){
  return(
    <div>
      <h1>Hello Pujan!</h1>
    </div>
  )
} */

/* const ReactElement = {
  type: 'a',
  props: {
       href: "https://www.youtube.com/watch?v=kAOuj6o7Kxs",
       target: '_blank'
  },
  children: 'Click me to visit chai aur code custom react video'
} */

const anotherElement = (
  <a href='https://www.youtube.com/watch?v=kAOuj6o7Kxs' target='_blank'>Visit chai aur code</a>
)

const anotherUser = 'Vijay Jani';

const reactElement = React.createElement(
   'a',
   {href: "https://www.youtube.com/watch?v=kAOuj6o7Kxs", target: '_blank'},
   'Click me to visit chai aur code custom react video',
   anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <>
    <App />
    // <MyApp />
  // </>

  // ReactElement
  // anotherElement
  // reactElement

)