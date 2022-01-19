import { useEffect, useState } from "react";


const ReadMore = () => {


    const [text, setText] = useState("");
    const [click, setClick] = useState("false");
    const moreText = "This is more text";

    useEffect(() => {

        readMore()
    }, [click]);

    const readMore = () => {
        setText(text + moreText)
    }


    return (
        <div>
            <h2> Text </h2>
            <h3> some text {text} </h3>
            <button type='button' onClick={() => setClick(!click)}> Click me to read more </button>
        </div>
    );
}

export default ReadMore;