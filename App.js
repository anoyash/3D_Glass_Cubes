import React from 'react';
import { ReactDOM } from 'react-dom';


const App = () => {
    return (
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
}

const root = document.getElementById('root');

root.render(<App></App>)