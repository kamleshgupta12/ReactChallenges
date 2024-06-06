import './Frontpage.css'
import Cards from './Cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Addtask from './Addtask';
const Frontpage = () => {
    return (
        <>
            <div className='containerBox'>
                <div className="leftBox">
                    <div className="nameBox">
                        <div className='taskHead'>Task Manager</div>
                        <span>harjit@gmail.com</span>
                    </div>
                    <div className="itemBox">
                        <div className="midIcon" >
                            <FontAwesomeIcon icon="fa-solid fa-file" />
                            <span>All Task</span>
                        </div>
                        <div className="midIcon" >
                            <FontAwesomeIcon icon="fa-solid fa-bookmark" />
                            <span>Important Tasks</span>
                        </div>
                        <div className="midIcon" >
                            <FontAwesomeIcon icon="fa-solid fa-check-double" />
                            <span>Completed Tasks</span>
                        </div>
                        <div className="midIcon" >
                            <FontAwesomeIcon icon="fa-solid fa-xmark" />
                            <span>Incompleted Tasks</span>
                        </div>
                    </div>
                    <div className="btnBox">
                        <button>
                            Log Out
                        </button>
                    </div>
                </div>
                <div className="rightBox">
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Addtask/>

                </div>
            </div>
        </>
    );
}

export default Frontpage;