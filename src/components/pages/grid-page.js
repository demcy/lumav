import React from 'react';
import ProductPage from './product-page';

const GridPage = ({products}) => {
    
    const items = products.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <div key={id} className="card d-flex flex-column align-content-end" >
                <ProductPage {...itemProps} />
            </div>
        );
    });
    return (
        <div className="card-deck">
            {items}
        </div>
    );
};

export default GridPage;