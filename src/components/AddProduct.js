import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();

    const addingProduct = async (e) => {
        e.preventDefault();
        const product = { title, price };
        const requestAPI = new Request('http://localhost:5000/products', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'content-type': 'application/json',
            },
        });

        await fetch(requestAPI);

        navigate('/');
    };

    return (
        <div className="container">
            <form onSubmit={addingProduct}>
                <div className="field py-3">
                    <label htmlFor="title" className="label">
                        title
                    </label>
                    <div className="control">
                        <input
                            type="text"
                            value={title}
                            className="input"
                            id="title"
                            onChange={(event) => {
                                setTitle(event.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className="field">
                    <label htmlFor="price" className="label">
                        price
                    </label>
                    <div className="control">
                        <input
                            type="text"
                            className="input"
                            id="price"
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                        />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <button type="submit" className="button is-success">
                            Add Product
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddProduct;
