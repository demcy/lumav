import React, { Component } from 'react';
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
        items: data,
        count: 0,
        cartItems: []
    }

    addItem = (item) => {
        const newItem = { ...item, id: this.maxId++ }
        this.setState(({ items }) => {
            const newArray = [
                ...items,
                newItem
            ]
            return {
                items: newArray
            }
        });
    };

    removeItem = (itemId) => {
        const item = this.state.cartItems.find(({ id }) => id === itemId);
        if(item){
            this.updateOrder(itemId, -item.count);
        }
        this.setState(({ items }) => {
            const idx = items.findIndex((el) => el.id === itemId);
            const newArray = [
                ...items.slice(0, idx),
                ...items.slice(idx + 1)
            ]
            return {
                items: newArray
            };
        });
    }

    addToCart = (id) => {
        this.updateOrder(id, 1);
    }

    updateOrder = (itemId, quantity) => {
        const { items, cartItems } = this.state;

        const initItem = items.find(({ id }) => id === itemId);
        const itemIndex = cartItems.findIndex(({ id }) => id === itemId);
        const item = cartItems[itemIndex];

        const newItem = this.updateCartItem(initItem, item, quantity);
        const allItems = this.updateCartItems(cartItems, newItem, itemIndex)
        this.setState(({cartItems, count}) =>{
            return{
                cartItems: allItems,
                count: allItems.map((item) => item.count).reduce((prev, curr) => prev + curr, 0)
            }
        })
    }

    updateCartItem = (initItem, item = {}, quantity) => {

        const {
            id = initItem.id,
            count = 0
            } = item;
    
        return {
            id,
            count: count + quantity
        };
    };

    updateCartItems = (cart, item, idx) => {

        if (item.count === 0) {
            return [
                ...cart.slice(0, idx),
                ...cart.slice(idx + 1)
            ];
        }

        if (idx === -1) {
            return [
                ...cart,
                item
            ];
        }

        return [
            ...cart.slice(0, idx),
            item,
            ...cart.slice(idx + 1)
        ];
    };

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


