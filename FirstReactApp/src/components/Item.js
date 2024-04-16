import "./Item.css"
function Item(props){
    const BrandName = props.details;
    return (
        <h1>{BrandName}</h1>
        
    );
}

export default Item;