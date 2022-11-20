import {useDispatch,useSelector} from "react-redux"
import Counter from "../../components/Conter"
function MainPage(params) {

    // const dispatch = useDispatch()

    // const title = useSelector(state => state.title)

    // const changeText = () => {
    //     dispatch({
    //         type:"CHANGE_TEXT"
    //     })
    // }

    return(
        <>
        {/* <h1>{title}</h1>
        <button onClick={changeText}>text</button> */}
        <div>
            <Counter/>
        </div>
        </>
    )
}
export default MainPage;