import React from 'react';

const FormPage = () => {
    return (
        <form style={{width: "70%", float: "left"}}>
            <h1 style={{textAlign: "center"}}>Add product form</h1>
            <input className="form-control" placeholder="Product image" />
            <input className="form-control" placeholder="Product name" />
            <input className="form-control" placeholder="Product price" />
            <button className="btn btn-success btn-block" style={{marginTop: "10px"}}>Submit</button>
        </form>
    )
};

export default FormPage;