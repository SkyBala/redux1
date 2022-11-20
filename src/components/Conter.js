import {useDispatch,useSelector} from "react-redux"


function Counter() {
    
   const dispatch = useDispatch()

   const count = useSelector(state => state.count)

   const Increment = () => {
       dispatch({
          type:"INCREMENT"
       })
    }
    const Decrement = () => {
        dispatch({
            type:"DECREMENT"
        })
   }
    return(
        <>
        <button onClick={Increment}>+1</button>
        <h1>{count}</h1>
        <button onClick={Decrement}>-1</button>
        </>
    )
}

export default Counter