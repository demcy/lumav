import React, { useState } from 'react';

const FormPage = ({onItemAdded}) => {

    const [ image, setImage] = useState('');
    const [ name, setName] = useState('');
    const [ price, setPrice] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        onItemAdded({image, name, price})
        setImage('');
        setName('');
        setPrice('');
    };

    return (
        <form className="col-sm-8" onSubmit={onSubmit} >
            <h1 style={{textAlign: "center"}}>Add product form</h1>
            <input className="form-control" onChange={(event) => setImage(event.target.value)} placeholder="Product image" value={image} />
            <input className="form-control" onChange={(event) => setName(event.target.value)} placeholder="Product name" value={name} />
            <input className="form-control" onChange={(event) => setPrice(event.target.value)} placeholder="Product price" value={price} />
            <button className="btn btn-success btn-block" style={{marginTop: "10px"}}>Submit</button>
        </form>
    )
};

export default FormPage;