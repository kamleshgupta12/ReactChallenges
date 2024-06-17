import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Card = (props) => {
    let couses = props.couses;
    let likeCourses = props.likeCourses;
    let setLikeCourses = props.setLikeCourses;
    function clickHandle() {
        if (likeCourses.includes(couses.id)) {
            setLikeCourses((prev) => prev.filter((cid) => cid !== couses.id));
            toast.warning("Like removed");
        }
        else {
            if (likeCourses.length === 0) {
                setLikeCourses([couses.id])
            }
            else {
                setLikeCourses((prev) => [...prev, couses.id])

            }
            toast.success("Liked successfully");

        }
    }
    return (
        <>
            <div className="card mt-2">
                <div className="w-[250px] h-[100%] border rounded-lg overflow-hidden  bg-slate-600">
                    <div className="relative">
                        <img className="w-[100%]" src={couses.image.url} alt="" />
                        <button onClick={clickHandle} className="w-[40px] h-[40px] rounded-full bg-white absolute right-2 bottom-0 flex items-center justify-center ">
                            {
                                likeCourses.includes(couses.id) ? (<FcLike className="  text-[25px]" />) :
                                    (<FcLikePlaceholder className="  text-[25px]" />)
                            }
                        </button>
                    </div>

                    <div className="m-[10px]"    >
                        {/* <p className="text-white">{couses.id}</p> */}
                        <p className="font-bold text-white">{couses.title}</p>
                        <p className="text-white text-[12px]">
                         {
                            couses.description.length > 100 ? (couses.description.substring(0,100)) +"...." : (couses.description)
                         }
                            </p>
                    </div>
                </div>
            </div>
            <ToastContainer />

        </>
    )
}

export default Card;