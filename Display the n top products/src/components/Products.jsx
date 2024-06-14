import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './Products.css';

function Products() {
  const nav = useNavigate();
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [discount, setDiscount] = useState('');
  const [availability, setAvailability] = useState('');

  const senddb = async (e) => {
    e.preventDefault();
    if (
      productName.length === 0 ||
      price.length === 0 ||
      rating.length === 0 ||
      discount.length === 0 ||
      availability.length === 0
    ) {
      alert('Enter All fields');
    } else {
      const ProductList = { productName, price, rating, discount, availability };
      console.log(ProductList);
      fetch("http://20.244.56.144/test/auth/postProducts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ProductList)
      }).then(() => {
        console.log("New Request Added");
        nav("/get");
      });
    }
  }

  return (
    <div id="bodyss">
      <div className="product-form">
        <div className="containersss">
          <div className="headersss">
            <h1>Service Request Details</h1>
          </div>
          <form>
            <div className="input">
              <i className="fa-solid fa-user"></i>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Product Name"
              />
            </div>
            <div className="input">
              <i className="fa-solid fa-mobile"></i>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
              />
            </div>
            <div className="input">
              <i className="fa-solid fa-rate"></i>
              <input
                type="number"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                placeholder="Rating"
              />
              </div>
              
            <div className="input">
              <i className="fa-solid fa-discount"></i>
              <input
                type="text"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                placeholder="Discount"
              />
            </div>
            <div className="input">
              <i className="fa-solid fa-avail"></i>
              <input
                type="text"
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                placeholder="Availability"
              />
              
            </div>
            <input
              className="submit-btn"
              onClick={senddb}
              type="submit"
              value="SAVE"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Products;
