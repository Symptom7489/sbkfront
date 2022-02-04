import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/Header';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';

const routing = (
    <BrowserRouter>
        <React.StrictMode>
            <ResponsiveAppBar />
                <Routes>
                    <Route path="/" element={<App />} />
                </Routes>
                        <Footer />
        </React.StrictMode>
    </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'));

reportWebVitals();
