import logo from './logo.svg';
import './App.css';
import socketIO from 'socket.io-client'
import Home from './components/Home';
import ChatPage from './components/ChatPage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const socket = socketIO.connect("http://localhost:5000/")
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home socket={socket} />}></Route>
          <Route path='/chat' element={<ChatPage socket={socket} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
