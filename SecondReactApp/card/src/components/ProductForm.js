import { useState } from 'react';
import './ProductForm.css';

function ProductForm(){
const [title, setTitle] = useState(' ');
function titleChangeHandler(event){
    setTitle(event.target.value);
    console.log(title);
}

    return(
<form className='Form'>
<div className='Title'>
    <label>Title</label>
    <input type='text' onChange={titleChangeHandler}></input>
</div >
<div className='Date'>
    <label>Date</label>
    <input type='date' min="2024-01-01" max="2024-12-12"></input> 
</div>
<div className='Cart'>
    <button >Add To Cart</button>
</div>

</form>

    )
}

export default ProductForm;