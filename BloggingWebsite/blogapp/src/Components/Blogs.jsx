import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";
import { ColorRing } from "react-loader-spinner";
function Blogs() {
    const { posts, loader } = useContext(AppContext);
    return (
        <>

            <div className="flex justify-center items-center flex-col w-[50%] m-auto mt-[70px] mb-[65px] gap-3 ">
                {
                    loader ? (
                        <div>
                            <div><ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="color-ring-loading"
                            wrapperStyle={{}}
                            wrapperClass="color-ring-wrapper"
                            colors={['#222']}
                        /></div>
                            <div>Loading...</div>   
                        </div>
                    ) : (posts.length === 0 ? (<div>hello</div>) : (
                        posts.map((post, id) => (
                            <div key={id}>
                                <p className="text-[brown] text-[20px] font-medium">{post.title}</p>
                                <p className="flex items-center gap-1 text-[16px] "><span className="text-[18px] italic">by</span>{post.author} <span className="text-[18px] italic">on</span> <span className="font-bold">{post.category}</span> </p>
                                <p className="font-bold">Posted on :-<span className=" font-medium text-[15px] text-[#444]">{post.date}</span></p>
                                <p className="text-[#333]">{post.content}</p>
                                <div >
                                    {
                                        post.tags.map((tag, index) => {
                                            return <span className="text-[blue] p-1" key={index}>{`#${tag}`}</span>
                                        })
                                    }
                                </div>
                            </div>
                        ))
                    ))
                }
            </div>
        </>
    )
}
export default Blogs;