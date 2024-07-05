import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { decrement,increment } from "../redux/CounterSlice";

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch()
    console.log(count, "1000000000000000");
    return (
        <>
            <div>
                <button onClick={()=>dispatch(increment())}>Increment</button>
                <p>{count}</p>
                <button onClick={()=>dispatch(decrement())}>Decrement</button>
            </div>
        </>
    );
}

export default Counter;
