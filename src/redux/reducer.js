export const reducer = (state={value:0}, action)=>{

    switch (action.type){
        case "INCREMENT":
            return {
                ...state,
                value: action.payload+1
            }
        case "ADD_NEW_STUDENT":
            return {
                ...state,
                studentData:  [...state.studentData, action.payload]
            }
        case "LOAD_STUDENT":
            return {
                ...state,
                studentData: action.payload
            }
        default:
            return {...state}
    }
}