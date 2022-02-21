import { ADD_DATA } from "./actionTypes"

export const addData=(payload)=>{
    return {
        type:ADD_DATA,
        payload
    }
}