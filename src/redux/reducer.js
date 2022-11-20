
const initialState = {
    // title:"old tex",
    count:0
}

export function reducer(state = initialState,action){
   
        // if (action.type === "CHANGE_TEXT") {
        //     return {...state, title:"New text"}
        // }
        if (action.type === "INCREMENT") {
            return{...state, count:state.count + 1}
        }else if (action.type === "DECREMENT"){
            return{...state, count:state.count -1}
        }

        return state
}