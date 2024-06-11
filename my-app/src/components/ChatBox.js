import React from 'react'
import './ChatBox.css'

function ChatBox() {
  return (
    <div className="chatbox-container">
      <h2>Dennis</h2>
      <div className="chatbox-messages">
        <div className="message user-message">
          <p>User: Hi, is the chair still available?</p>
        </div>
        <div className="message profile-message">
          <p>Dennis: Yes, it is still available. Would you like to pick it up today?</p>
        </div>
        <div className="message user-message">
          <p>User: That would be great. What time works for you?</p>
        </div>
        <div className="message profile-message">
          <p>Dennis: How about 3 PM?</p>
        </div>
        <div className="message user-message">
          <p>User: Perfect, see you then!</p>
        </div>
      </div>
      <div className="chatbox-input">
        <input type="text" placeholder="Type a message..." />
        <button>Send</button>
      </div>
    </div>
  )
}

export default ChatBox