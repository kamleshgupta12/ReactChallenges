import { useEffect, useState } from "react";
import axios from 'axios';

const API_KEY =  'alGeF3LVbPAxnuJ4st6HrpNISSS9m25G';


function Random() {
    const [randomGif, setRandomGif]=useState(''); 
   

async function gifData(){
    const url =  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const {data} = await axios.get(url);
    const gifImg= data.data.images.downsized_large.url;
    console.log(data,"datttttttttt");
    setRandomGif(gifImg)
}

// useEffect(()=>{
// gifData()
// },[])



    function gifGenerator() {
        gifData();

    }
    return (
        <>
            <div>
                <div>
                    <img src={randomGif} alt="" />
                </div>
                <div>
                    <button onClick={gifGenerator}>Generate Gif</button>
                </div>
            </div>
        </>

    )
}

export default Random;