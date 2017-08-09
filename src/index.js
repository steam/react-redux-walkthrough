import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import app from './reducers'

const initialMessages = [
  {
    text: "Hi, I'm worried I have something wrong with my ankle.", 
    name: "Sean", 
    key: "unique1",
    id: "unique1",
    time: new Date(), 
    avatar: "https://staging.cirrusmd.com/images/default-profile.svg"
  },
  {
    text: "I twisted it while walking down the street.", 
    name: "Sean", 
    key: "unique2",
    id: "unique2",
    time: new Date(), 
    avatar: "https://staging.cirrusmd.com/images/default-profile.svg"
  }
]

let store = createStore(app, { messages: initialMessages })

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
