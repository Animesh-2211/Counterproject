import { useState } from "react"

export const Counter=()=>{
 
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const[Count,setCount]=useState(0);

    const increment=()=>{setCount(Count+10)

    }
    const decrement=()=>{setCount(Count-2)}

    const reset=()=>{setCount(0)}

    return(
        <>
        <h1>Count:{Count}</h1>
        <button onClick={decrement}>DECREASE</button>
        <button onClick={increment}>INCREASE</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}