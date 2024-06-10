import React from "react";
import { FaHeart } from "react-icons/fa";
const Card = (props) => {
let couses= props.couses;
let likeCourses=props.likeCourses;
let setLikeCourses=props.setLikeCourses;
   function clickHandle(){

    }
    return (
        <>
            <div className="card">
                <div className="w-[250px] border rounded-lg overflow-hidden  bg-slate-600">
                    <div className="relative">
                        <img className="w-[100%]" src={couses.image.url} alt="" />
                        <div className="w-[40px] h-[40px] rounded-full bg-white absolute right-2 bottom-0 flex items-center justify-center ">
                            <FaHeart onClick={clickHandle} className=" text-red-500 text-2xl" />
                        </div>
                    </div>

                    <div className="m-[10px]"    >
                        <p className="text-white">{couses.id}</p>
                        <p className="font-bold text-white">{couses.title}</p>
                        <p className="text-white text-[12px]">{couses.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;