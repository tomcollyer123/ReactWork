import { useState } from "react";

const CarInput = () => {
    
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [colour, setColour] = useState("");
    const [year, setYear] = useState("");
    
    let carBrand;
    let carModel;
    let carColour;
    let carYear;
    
    return (
        
        <div>
            <h3> Car form </h3>
            <input type="text" name="brand"
               
                onChange={(event) => {
                    console.log(event.target);
                    carBrand = event.target.value;
                    console.log(carBrand);
                }
            }/>
                   
                    <input type="text" name="model"
               
                    onChange={(event) => {
                        console.log(event.target);
                        carModel = event.target.value;
                        console.log(carModel);
                     }
                 }/>
                        
                        <input type="text" name="colour"
               
                        onChange={(event) => {
                            console.log(event.target);
                            carColour = event.target.value;
                            console.log(carColour);
                        }
                    }/>
                            <input type="number" name="year"
               
                            onChange={(event) => {
                                console.log(event.target);
                                carYear = event.target.value;
                                console.log(carYear);
                            }
                        }/>

                <button type="button" onClick={() => {
                setBrand(carBrand);
                setModel(carModel);
                setColour(carColour);
                setYear(carYear);
            }} />

            <h3> The Brand: {brand} </h3>
            <h3> The Model: {model} </h3>
            <h3> The Colour: {colour} </h3>
            <h3> The Year: {year} </h3>
        </div>
     );
}




export default CarInput;