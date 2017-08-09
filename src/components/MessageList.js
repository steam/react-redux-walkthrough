import React from 'react'
import { connect } from 'react-redux'
import MessageItemRow from './MessageItemRow'

let MessageList = ({messages}) => {
  const rows = messages.map((message) => {
    return(
      <MessageItemRow 
        key={message.key}
        message={message}
      />
    )
  })
  return (<div>{rows}</div>)
}

const mapStateToProps = state => ({
    messages: state.messages
})

MessageList = connect(
  mapStateToProps
)(MessageList)

export default MessageList
