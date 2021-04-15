import React, { useState } from 'react';
import { FormPage, GridPage, CartPage } from '../pages';
import './app.css';

const App = () => {

    const [items, setItems] = useState(products);

    const addItem = (item) => {
        setItems([
            ...items, {...item}
        ])
    };

    return (
        <main role="main" className="container">
            <FormPage onItemAdded={addItem}/>
            <CartPage />
            <GridPage products={items}/>
        </main>
    )
};

export default App;

const products = [
    {
        image: 'https://arvutitark.ee/prodpics/563/563471/thumb200/4146257.jpg',
        name: 'Veebikaamera Razer Kiyo Pro',
        price: 190
    },
    {
        image: 'https://arvutitark.ee/prodpics/561/561211/thumb200/4158556.jpg',
        name: 'ASUS ROG Strix SCAR',
        price: 2300
    },
    {
        image: 'https://arvutitark.ee/prodpics/551/551262/thumb200/4125756.jpg',
        name: 'Sennheiser CX 400BT True',
        price: 100
    },
    {
        image: 'https://arvutitark.ee/prodpics/367/367459/thumb200/3717484.jpg',
        name: 'Dell P2419H',
        price: 150
    },
    {
        image: 'https://arvutitark.ee/prodpics/537/537483/thumb200/4162680.jpg',
        name: 'Xiaomi Mi Electric Scooter Pro 2',
        price: 500
    },
    {
        image: 'https://arvutitark.ee/prodpics/565/565222/thumb200/4155880.jpg',
        name: 'SONY PLAYSTATION 5',
        price: 710
    }
]