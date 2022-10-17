import { useState } from "react";

const HighOrderComponent = (Component, incrementValue)=>{
    const HOCFunc = ()=>{
        const [value, setValue] = useState(0)
        const incrementHandler = ()=>{
            setValue(value+incrementValue)
        }
        return <Component value={value} onIncrementValue={incrementHandler} />
    }

    return HOCFunc

}

export default HighOrderComponent