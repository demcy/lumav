import React from 'react';

const ProductPage = (itemProps) => {
    const { image, name, price } = itemProps;
    return (
        <div className="d-flex flex-column align-content-end" style={{ height: "100%" }}>
            <img className="card-img-top" src={image} alt="Card image" />
            <div className="card-body text-center">
                <div className="price">
                    <p className="card-text" >{price}€</p>
                </div>
                <div className="name">
                    <h4 className="card-title" >{name}</h4>
                </div >
            </div>
            <button className="btn btn-warning btn-sm btn-close">X</button>
            <button className="btn btn-success btn-block">Add to cart</button>
        </div>
    )
};

export default ProductPage;