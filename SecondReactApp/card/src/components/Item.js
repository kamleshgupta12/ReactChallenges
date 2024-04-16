import './Item.css';

function Item(props){
    const Data = props.Heading;
    return (

<div className='Box'>
<p>{Data}</p>

</div>

    )
}

export default Item;