import React, { useState } from 'react';
import InputEmojiWithRef from 'react-input-emoji';

const ChatFooter = ({socket}) => {
  const [message, setMessage] = useState('');

  const handleTyping = () => {
    socket.emit('typing',`${localStorage.getItem('userName')} is typing...`);
  }

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log(message);
    if(message!='' && localStorage.getItem('userName')){
        socket.emit('message', {
            text: message,
            name: localStorage.getItem('userName'),
            id: `${socket.id}${Math.random()}`,
            socketID: socket.id,
        })
    };
    setMessage('');
  };
  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <InputEmojiWithRef
          placeholder="Write message"
          value={message}
          className="message"
          onChange={setMessage}
          onClick = {handleTyping}

        />
        <button className="sendBtn">SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;