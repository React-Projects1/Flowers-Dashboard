import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavbarHeightProvider } from './Context/NavbarHeightContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NavbarHeightProvider>
        <App />
    </NavbarHeightProvider>
);


