import { useParams } from "react-router-dom";
import Contents from "./Contents";

const Shop = () => {

    // shop/id6282730393
    // Grab the url paramater from the URL
    // Save it as a value called id
    const { id } = useParams();

    return (
        <div>
            <h3> Shop </h3>
            <Contents title="shop"> </Contents>
        </div>
    );
}

export default Shop;