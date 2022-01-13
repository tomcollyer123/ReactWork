import ContactCardSubChild from "./ContactCardSubChild";


const ContactCard = ({animalArray}) => {
console.log(animalArray);
    
    
    return (
       <div>
        {
            animalArray.map((animal, i) => {
                return <ContactCardSubChild animal = {animal}/>
            })
        } 
       
        </div>
     );
}
 
export default ContactCard;