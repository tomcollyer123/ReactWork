const Basket = ({ basket }) => {
    return (
        <div>
            <h2> Basket </h2>
            {basket.map((product) => {
                return <h2> Product: {product.productName} Quantity: {product.quantity}</h2>
            })}
        </div>
    );
}

export default Basket;