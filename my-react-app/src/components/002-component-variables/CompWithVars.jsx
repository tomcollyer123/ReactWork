const CompWithVars = () => {
    let name = "Tom"
    // With return() you cant return more than one element
    // A div that contains x elements is only ONE element
    return (
    // <h2>hello</h2> <------------this will error
    // <h2>world</h2>
    <div>
        <h2>hello</h2> 
        {/* anything wrapped in {} its JS */}
     <h2>world, my name is {name}</h2>
    </div>
)
}


export default CompWithVars;