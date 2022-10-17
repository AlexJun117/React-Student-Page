export const actionIncrement = (value)=>{
    return {
        type: "INCREMENT",
        payload: value
    }
}

export const actionAddNewStudent = (value)=>{
    return {
        type: "ADD_NEW_STUDENT",
        payload: value
    }
}

export const actionLoadStudentData = (data)=>{
    return {
        type: "LOAD_STUDENT",
        payload: data
    }
}