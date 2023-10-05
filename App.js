import React from 'react';
import ReactDOM from "react-dom/client";
import Header from './src/Componets/Header';
import Body from './src/Componets/Body';
import Footer from './src/Componets/Footer';


const App = () => {
    return (
        <>
        {/* <Header/> */}
        <Body/>
        {/* <Footer/> */}
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);