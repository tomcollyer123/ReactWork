const Product = ({product}) => {
const {name, quantity, cost} = product;
    
return (  
        <div>
            <h2> Product name: {name}</h2>
            <h2> Product quantity: {quantity}</h2>
            <h2> Product cost: {cost}</h2>
        </div>
    );
}
 
export default Product;