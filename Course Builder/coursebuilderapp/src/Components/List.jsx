import Nav from "./Nav";

import Additems from "./Additems";
import { myContext } from "../App";
import { useContext, useEffect, useState } from "react";
import { json } from "react-router-dom";
import Editmodule from "./Editmodule";
import SingleList from "./SingleList";
function List() {
    const { setMydata, mydata } = useContext(myContext);
    const{edit,setEdit}=useContext(myContext)
    const { module, allData } = useContext(myContext);
    const [datt, setDatt] = useState(allData)
    useEffect(() => {
        localStorage.setItem("allmodule", JSON.stringify(allData));
    }, [allData])
    useEffect(() => {
        setDatt(JSON.parse(localStorage.getItem("allmodule")));

    }, [allData])
    console.log("module", module);
    console.log(allData, "all DAta>>>>>>>>>>>");
    function remove(){
        setMydata(false);
        setEdit(false)
       
    }
    return (
        <>
            <Nav />

            <div onClick={remove}  className="w-[80%] m-auto h-[90vh]">
                {datt.map((item, ind) => {
                    return (
                        <>
                           <SingleList key={ind} id={ind} item={item}  />
                        </>
                    )
                })}
            </div>
            <div className='bg-white absolute top-[60px] right-[100px]'>
                <Additems />
            </div>
        </>
    )
}

export default List;