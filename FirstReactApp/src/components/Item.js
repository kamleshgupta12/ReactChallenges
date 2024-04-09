import "./Item.css"
function Item(props){
    const details = props.details;
    return (
        <h1>{details}</h1>
        
    );
}

export default Item;