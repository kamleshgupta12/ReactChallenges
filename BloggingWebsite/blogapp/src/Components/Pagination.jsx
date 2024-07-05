import { useContext, useLayoutEffect } from "react";
import App from "../App";
import { AppContext } from "../Context/AppContext";
import { click } from "@testing-library/user-event/dist/click";


function Pagination() {
    const { page, totalPages, clickHandler } = useContext(AppContext)
    console.log(page, "fguyl2ef");
    return (
        <>
            <div className="h-[45px]  border-t-2 w-full   bg-white fixed bottom-0 flex  items-center  px-[115px]  justify-around">
                <div className=" flex gap-2">
                    {page > 1 &&
                        (<button className="p-1 rounded-md border-[1.5px] px-4" onClick={() => clickHandler(page - 1)}>Previous</button>)
                    }
                    {page < totalPages &&
                        (<button className="p-1 rounded-md border-[1.5px] px-4" onClick={() => clickHandler(page + 1)}>Next</button>)
                    }
                </div>
                <div>
                    <p className="font-semibold ">Page {page} of {totalPages}</p>
                </div>
            </div>

        </>
    )
}
export default Pagination;