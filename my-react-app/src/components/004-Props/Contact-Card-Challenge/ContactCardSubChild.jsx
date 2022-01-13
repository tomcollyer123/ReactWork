const ContactCardSubChild = ({animal}) => {

    // Destructuring animal to give me the values
    const {animalName, phoneNumber, imageUrl, quote, address} = animal;
    return ( 
        <div>
        <h2> Animal name: {animalName}</h2>
        <h2> Phone number: {phoneNumber}</h2>
        <h2> Image URL: {imageUrl}</h2>
        <h2> Quote: {quote}</h2>
        <h2> Address: {address}</h2>
        </div>
     );
}
 
export default ContactCardSubChild;