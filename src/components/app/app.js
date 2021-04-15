import React from 'react';
import { FormPage, GridPage, CartPage } from '../pages';
import './app.css';

const App = () => {
    return (
        <main role="main" className="container">
            
            <FormPage />
            
            <CartPage />
            <GridPage />
        </main>
    )
};

export default App;