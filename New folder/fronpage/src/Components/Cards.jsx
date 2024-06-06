
import './Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Cards = ()=>{
return(
    <>
    <div className='Card'>
        <div className="headContent">
            <div className='heading'>This is a task Heading</div>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing sit amet consectetur adipisicing elit. Sapiente, incidunt?</span>
        </div>
        <div className="btnContent">
           <button>Completed</button>
           <FontAwesomeIcon className='cardIcon' icon="fa-regular fa-heart" />
           <FontAwesomeIcon className='cardIcon' icon="fa-solid fa-pen-to-square" />
           <FontAwesomeIcon className='cardIcon' icon="fa-solid fa-trash" />
        </div>
    </div>
    </>
);
}
export default Cards;