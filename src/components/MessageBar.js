import React from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../actions'

let MessageBar = ({dispatch}) => {
  let input
  return (
    <div>
      <input 
        placeholder="Message Patient" 
        ref={node => {
          input = node
        }} 
      />
      <button onClick={() => {
        dispatch(addMessage(input.value))
        input.value = ''
      }}>
        SEND
      </button>
    </div>
  )
}

MessageBar = connect()(MessageBar)

export default MessageBar
