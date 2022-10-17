import HighOrderComponent from "./highOrderComponent"

const ComponentA = ({value, onIncrementValue})=>{
    return (
        <div>
            <h3>{value}</h3>
            <button onClick={onIncrementValue}>Increment by 10</button>
        </div>
    )
}

export default HighOrderComponent(ComponentA, 10)