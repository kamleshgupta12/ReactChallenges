import Card from './Card'
import React, { useState } from 'react';
const Cards = (props) => {
    let couses= props.couses;
const[likeCourses, setLikeCourses]=useState([])  

    function getCourses(){
        let allCourses = [];
    Object.values(couses).forEach(arr=> {
            arr.forEach(courseData=>{
                allCourses.push(courseData);
            })
        })
        return allCourses;
    }
    return (
        <>
        
            <div className='flex flex-wrap gap-5  justify-center'>
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