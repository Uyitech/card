import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import MainContent from './components/MainContent/MainContent';
import About from "./components/About/About"
import Interest from "./components/Interest/Interest";
import Footer from './components/Footer/Footer';


function App() {
    return (
        <div className="container app">
            <MainContent />
            <About />
            <Interest />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);