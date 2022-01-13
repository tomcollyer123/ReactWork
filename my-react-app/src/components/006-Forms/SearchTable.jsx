import { useState } from "react";
import Product from "./State-exercises/Product";


const SearchTable = () => {
//    Create a ProductTable component that filters information based on the vaule of a Search field.
   
const [query, setQuery] = useState("");
const listOfProducts = [
    {
        name: "ball",
        quantity: 5,
        cost: 10

    },
    {
        name: "lego",
        quantity: 50,
        cost: 100

    },
    {
        name: "xbox",
        quantity: 2,
        cost: 500

    },
]


    return (  
        <div>
             <h2>Search table</h2>
            <input type="text" name="product" onChange={(event) => setQuery(event.target.value)}/>
            {listOfProducts.map((product, i) => {
                if(product.name == query) {
                    return <Product product={product}/>

                }

            })}
       
        </div>
    );
}
 
export default SearchTable;