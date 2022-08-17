import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './longin'
import reportWebVitals from './reportWebVitals';
import io from 'socket.io-client';


const root = ReactDOM.createRoot(document.getElementById('root'));

const socket = io("ws://localhost:10001");
socket.on('my_response', function(msg) {
  console.log("msg", msg);
});


function App() {

  socket.emit('my_event', {name: "lyd"});
  return (
    <div>
     <h1>websocket.io</h1>
    </div>
  );
}

root.render(<App />);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
