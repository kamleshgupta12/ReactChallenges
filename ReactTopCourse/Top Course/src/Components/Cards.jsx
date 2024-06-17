import Card from './Card'
import React, { useState } from 'react';
const Cards = (props) => {
    let couses= props.couses;
const[likeCourses, setLikeCourses]=useState([])  
const category=props.category;

    function getCourses(){
    if(category==="All"){
        let allCourses = [];
        Object.values(couses).forEach(arr=> {
                arr.forEach(courseData=>{
                    allCourses.push(courseData);
                })
            })
            return allCourses;
    }
    else{
        return couses[category];
    }
    }
    return (
        <>
        
            <div className='flex flex-wrap gap-2 w-[80%] m-auto justify-center'>
             {
                getCourses().map((couses)=>{
                return <Card  couses={couses} likeCourses={likeCourses}
                setLikeCourses={setLikeCourses}/>
                })
             }
            </div>
        </>
    );
}

export default Cards;