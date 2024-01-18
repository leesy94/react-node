import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App_movie';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router basename={process.env.PUBLIC_URL}>
            <App />
        </Router>
    </React.StrictMode>,
);