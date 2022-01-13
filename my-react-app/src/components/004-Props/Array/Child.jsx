import SubChild from "./SubChild";

const Child = (props) => {

    const fruit = props.fruit;
    console.log(fruit);

    return ( 
        <div>
       {fruit.map((fruit, i) => {
           console.log(fruit);
          return <SubChild key={i} fruit={fruit}/>
       })}
       </div>
     );
}
 
export default Child;