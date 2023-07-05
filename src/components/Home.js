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
        <motion.h2 animate={{ x:[-35,0],opacity:1}} transition={{
          duration: 1.5,
          ease: [0.3, 0.71, 1, 1.5],
        }} initial={{ opacity: 0}}
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
        <motion.button whileHover={{ scale: 1.2 }} className="home__cta">SIGN IN</motion.button>
      </form>
    </div>
  )
}

export default Home
