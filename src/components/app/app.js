import React, { Component} from 'react';
import { FormPage, GridPage, CartPage } from '../pages';
import './app.css';

const data = [
    {
        image: 'https://arvutitark.ee/prodpics/563/563471/thumb200/4146257.jpg',
        name: 'Veebikaamera Razer Kiyo Pro',
        price: 190,
        id: 1
    },
    {
        image: 'https://arvutitark.ee/prodpics/561/561211/thumb200/4158556.jpg',
        name: 'ASUS ROG Strix SCAR',
        price: 2300,
        id: 2
    },
    {
        image: 'https://arvutitark.ee/prodpics/551/551262/thumb200/4125756.jpg',
        name: 'Sennheiser CX 400BT True',
        price: 100,
        id: 3
    },
    {
        image: 'https://arvutitark.ee/prodpics/367/367459/thumb200/3717484.jpg',
        name: 'Dell P2419H',
        price: 150,
        id: 4
    },
    {
        image: 'https://arvutitark.ee/prodpics/537/537483/thumb200/4162680.jpg',
        name: 'Xiaomi Mi Electric Scooter Pro 2',
        price: 500,
        id: 5
    },
    {
        image: 'https://arvutitark.ee/prodpics/565/565222/thumb200/4155880.jpg',
        name: 'SONY PLAYSTATION 5',
        price: 710,
        id: 6
    }
]



export default class App extends Component {

    maxId = 100;

    state = {
        items : data,
        count: 0
    }

    addItem = (item) => {
        const newItem = {...item, id: this.maxId++}
        this.setState(({ items }) =>{
            const newArray = [
                ...items,
                newItem
            ]
            return {
                items: newArray
            }
        });
    };

    removeItem = (id) => {
        this.setState(({ items }) => {
            const idx = items.findIndex((el) => el.id === id);
            const newArray = [
                ...items.slice(0, idx),
                ...items.slice(idx + 1)
            ]
            return {
                items: newArray
            };
        });
    }

    addToCart = () => {
        this.setState(({count}) =>{
            return{
                count: count + 1
            }
        })
    }

    render() {
        return (
            <main role="main" className="container">
                
                    <div className="row">
                        <FormPage onItemAdded={this.addItem} />
                        <CartPage count={this.state.count} />
                    </div>
                    <GridPage products={this.state.items} onItemRemoved={this.removeItem} onAddToCart={this.addToCart} />
                
            </main>
        )
    }
    
};


