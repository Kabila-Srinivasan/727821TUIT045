import React, { useEffect, useState } from 'react';
import './GetData.css';
import { Link } from 'react-router-dom';
import ProductService from '../service/ProductsService';

const GetData = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    ProductService.getAllProducts()
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (productId) => {
    ProductService.deleteProduct(productId)
      .then(() => {
        getAllProducts();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <p id="order">Product List</p>
      <table id="gettable">
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Discount</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product?.productId}>
              <td>{product?.productId}</td>
              <td>{product?.productName}</td>
              <td>{product?.price}</td>
              <td>{product?.rating}</td>
              <td>{product?.discount}</td>
              <td>{product?.availability}</td>
              <td>
                <Link to={`/update/${product.productId}`}>
                  <button id="actions">Update</button>
                </Link>
                <button id="actions" onClick={() => deleteProduct(product.productId)}>Delete</button>
                <Link to="/">
                  <button id="actions">New</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetData;
