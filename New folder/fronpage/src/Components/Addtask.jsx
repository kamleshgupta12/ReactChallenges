import './Addtask.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Addtask = ()=>{
    return(
        <>
        <div className='addTask'>
        <FontAwesomeIcon className='addIcon' icon="fa-solid fa-cloud-arrow-up" />
            <h2>Add Task</h2>
        </div>
        </>
    );
}
export default Addtask;