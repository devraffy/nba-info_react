import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import SideBar from './sidebar';

export default function App() {
    return (
        <div id="App">
            <SideBar />
            <div id="page-wrap">
                <h1>NBA Info</h1>                
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
