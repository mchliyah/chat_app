import React, { useState } from 'react';
// this page is an imaginary chat page t obe edited later 
function HomePage() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

    console.log('HomePage is rendering');
  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'Me' }]);
      setNewMessage('');
    }
  };

  return (
    <div>
      <h1>Welcome to the Chat Home Page</h1>
      <div style={{ border: '1px solid #ccc', minHeight: '300px', marginBottom: '20px', padding: '10px' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: '10px', textAlign: message.sender === 'Me' ? 'right' : 'left' }}>
            <strong>{message.sender}:</strong> {message.text}
          </div>
        ))}
      </div>
      <div>
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message here..."
          style={{ width: '100%', marginBottom: '10px' }}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default HomePage;
