import React from "react";
import './Spiner.css'

const Spiner = () => {
    return (
        <>
            <div className="flex justify-center flex-col items-center  absolute top-[50%] right-[50%] text-white text-xl ">
                <div className="spiner ">
                </div>
                <div>Loading.....</div>

            </div>
        </>
    )
}

export default Spiner; 