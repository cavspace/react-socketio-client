import React from 'react';
import ReactDOM from 'react-dom/client';
import './longin'
import reportWebVitals from './reportWebVitals';
import SocketIoConnection from "./components/connect";

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {

    return (
        <div>
            <h1>websocket.io</h1>
            <SocketIoConnection></SocketIoConnection>
        </div>
    );
}

root.render(<App/>);


reportWebVitals();
