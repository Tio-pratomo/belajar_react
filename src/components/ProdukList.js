import { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

const ProdukList = () => {
    const [products, setProducts] = useState([]);

    const fetchingProducts = () => {
        const request = new Request('http://localhost:5000/products', {
            method: 'GET',
        });

        const getProducts = fetch(request);
        return getProducts.then((data) => data.json());
    };

    const getDataAPI = async () => {
        const data = await fetchingProducts();
        setProducts(data);
    };

    useEffect(getDataAPI, []);

    const deleteItem = async (id) => {
        const request = new Request(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',
        });

        await fetch(request);

        await getDataAPI();
    };

    return (
        <Fragment>
            <div className="py-5">
                <Link to="/add" className="button is-primary">
                    Add Item
                </Link>
            </div>

            <table className="table table-striped is-fullwidth">
                <thead>
                    <tr>
                        <td>No</td>
                        <td>Item</td>
                        <td>Price</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index + 1}>
                            <td>{index + 1}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>
                                <Link to={`/edit/${product.id}`} className="button is-info is-small mr-2">
                                    Edit
                                </Link>
                                <button
                                    className="button is-danger is-small"
                                    onClick={() => {
                                        deleteItem(product.id);
                                    }}
                                >
                                    delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default ProdukList;
