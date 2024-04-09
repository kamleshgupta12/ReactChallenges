import './Item2.css'

function Item2(props){
    const  name = props.name;
    const age = props.age;
    const course = props.course;
    const year = props.year;
    return (
        <div >
     <p>{name}</p>
     <p>{age}</p>
     <p>{course}</p>
     <p>{year}</p>
     
        </div>
    );
}

export default Item2;