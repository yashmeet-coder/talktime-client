import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = ({ socket }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userName', userName);
    socket.emit('newUser', { userName, socketID: socket.id })
    navigate('/chat');
  };

  return (
    <div>
      <form className='home__container' onSubmit={handleSubmit}>
        <motion.h2 animate={{ x:0,opacity:1, scale:1 }} transition={{
          duration: 3,
          ease: [0.5, 0.71, 1, 1.5],
        }} initial={{ opacity: 0, scale: 0.5 }}
       className="home__header">Sign in to Open Chat</motion.h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          minLength={6}
          name="username"
          id="username"
          className="username__input"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className="home__cta">SIGN IN</button>
      </form>
    </div>
  )
}

export default Home
