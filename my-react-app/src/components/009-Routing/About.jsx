import { useParams } from "react-router-dom";
import Contents from "./Contents";

const About = () => {

    // shop/id6282730393
    // Grab the url paramater from the URL
    // Save it as a value called id
    const { id } = useParams();

    return (
        <div>
            <h3> About </h3>
            <Contents title="about"> </Contents>
        </div>
    );
}

export default About;