import React from 'react';

const ProductPage = ({image, name, price, onItemRemoved}) => {
    //const { image, name, price } = itemProps;
    // const remove = () => {
    //     console.log(product);
    // }
    return (
        <div className="d-flex flex-column align-content-end" style={{ height: "100%" }}>
            <img className="card-img-top" src={image} alt="" />
            <div className="card-body text-center">
                <div className="price">
                    <p className="card-text" >{price}€</p>
                </div>
                <div className="name">
                    <h4 className="card-title" >{name}</h4>
                </div >
            </div>
            <button onClick={onItemRemoved} className="btn btn-warning btn-sm btn-close">X</button>
            <button className="btn btn-success btn-block">Add to cart</button>
        </div>
    )
};

export default ProductPage;