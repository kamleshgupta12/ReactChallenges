

import './Date.css';

function Date(props){
    const name = props.Name;
    const year = props.Year;
    const course = props.Course;
    return (

        <div className='Date'>
            <span>{name}</span>
            <span>{year}</span>
            <span>{course}</span>
        </div>
    )
}

export default Date;