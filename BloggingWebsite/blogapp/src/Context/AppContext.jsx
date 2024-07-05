import { children, createContext, useEffect, useState } from "react";
import { ApiUrl } from "../ApiUrl";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [page, setPage] = useState(1)
    const [totalPages, settotalPages] = useState(null);
    const [loader, setLoader] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchPostData(page=1) {
        setLoader(true)
        let url = `${ApiUrl}?page=${page}`;
        try {
            const data = await fetch(url);
            const apiData = await data.json();
            setPosts(apiData.posts)
            setPage(apiData.page)
            settotalPages(apiData.totalPages)
            console.log(apiData, "dataaaaaaaaaaaa");
        }
        catch {
            console.log("error");
        }
        setLoader(false)
    }
    // fetchPostData(page);

    const value = {
        posts,
        page,
        totalPages,
        loader,
        setLoader,
        fetchPostData,
        clickHandler
    }
console.log(value,"obbbbbb");
    function clickHandler(page) {
        setPage(page)
        fetchPostData(page)
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}