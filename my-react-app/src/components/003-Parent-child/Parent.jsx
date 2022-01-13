// In a jsx file, if you type in sfc it stands for 'Statless function componenet'

// import Child from "./Child";

// And produces the code underneath
const Parent = () => {
    return ( 
        // This parent will be rendering the child component
        // <h2>Placeholder for child component</h2>
        <Child/> //This returns the h2 in child file
       
     );
}
 
export default Parent;