import ContactCard from "./ContactCard";

const ContactCardManager = () => {

    const animalArray = [

        {
            animalName: "Gerry",
            phoneNumber: "1234",
            imageUrl: "https://i.pinimg.com/originals/1e/c7/61/1ec761ac4000d9faa522595e302d445b.jpg",
            quote: "wagwan",
            address: "house 5"
        },
        {
            animalName: "Gazza",
            phoneNumber: "2345",
            imageUrl: "https://i.pinimg.com/originals/1e/c7/61/1ec761ac4000d9faa522595e302d445b.jpg",
            quote: "yo",
            address: "house 4"
        },
        {
            animalName: "Dez",
            phoneNumber: "3456",
            imageUrl: "https://i.pinimg.com/originals/1e/c7/61/1ec761ac4000d9faa522595e302d445b.jpg",
            quote: "howdy",
            address: "house 3"
        },
        {
            animalName: "Mungo",
            phoneNumber: "4567",
            imageUrl: "https://i.pinimg.com/originals/1e/c7/61/1ec761ac4000d9faa522595e302d445b.jpg",
            quote: "wazzuuuup",
            address: "house 2"
        },
        {
            animalName: "Roger doger",
            phoneNumber: "5678",
            imageUrl: "https://i.pinimg.com/originals/1e/c7/61/1ec761ac4000d9faa522595e302d445b.jpg",
            quote: "hello",
            address: "house 1"
        }


        
    ];

    return ( 

        <ContactCard animalArray={animalArray}/>

     );
}
 
export default ContactCardManager ;