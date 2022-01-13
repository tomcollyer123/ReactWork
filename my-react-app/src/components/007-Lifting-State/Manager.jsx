// Product will be our child to display data
// Basket will store our products and render them out
// manager will be the parent class
import { useState } from "react";

import Basket from "./Basket";
import Product from "./Product";

// Have a selection of input fields, one for products and one for quantity
// Will be able to add products to my basket and the basket will render them

// State 1 - product name and quantity
// State 2 - Whats contained in the basket

const Manager = () => {

    // State for productName
    const [productName, setProductName] = useState("");
    const [qty, setQty] = useState(0);

    // state for Basket
    const [basket, setBasket] = useState([]);

    // Function that adds to basket and takes in data (prod name and qty)
    const addToBasket = (data) => {
        // Sets the state to be equal to what you pass in
        setBasket((basket) => {
            // Rather than replacing what is already in the array, it adds it to the end
            // ... in an array means ignore all of the first items in the array
            return [...basket, data]
        });
    };

    return (
        <div>
            <h2> Manager </h2>
            <Product setProductName={setProductName} setQty={setQty} addToBasket={addToBasket} productName={productName} qty={qty} />
            <Basket productName={productName} qty={qty} basket={basket} setBasket={setBasket} />

        </div>
    );
}

export default Manager;