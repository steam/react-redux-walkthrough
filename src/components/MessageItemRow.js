import React from 'react'

const MessageItemRow = ({message}) => {
  const time = new Date(message.time)
  return (
    <div className="message">
      <img
        alt="avatar"
        className="avatar"
        src={message.avatar}
      />
      <span className="name">
        {message.name}&nbsp;
        <em>{time.getHours() + ":" + time.getMinutes()}</em>
      </span>
      <div className="message-content">
        <div className="message-text">
          {message.text}
        </div>
      </div>
    </div>
  )
}

export default MessageItemRow
