import React, { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

function EditProduct() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const gettingProductById = async () => {
        const requestAPI = new Request(`http://localhost:5000/products/${id}`, { method: 'GET' });
        const dataAPI = await fetch(requestAPI);
        const data = await dataAPI.json();

        setTitle(data.title);
        setPrice(data.price);
    };

    useEffect(gettingProductById, []);

    const updateProduct = async (e) => {
        e.preventDefault();
        const product = { title, price };
        const requestAPI = new Request(`http://localhost:5000/products/${id}`, {
            method: 'PUT',
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
            <form onSubmit={updateProduct}>
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
                        <button type="submit" className="button is-info">
                            Update Product
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditProduct;
