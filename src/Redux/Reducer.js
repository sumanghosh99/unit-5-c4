import { ADD_DATA } from "./actionTypes";

const init_state={
    Data:[]
}

export const dataReducer=(state=init_state,{type,payload})=>{
    switch(type){
        case ADD_DATA: return {
            ...state,Data:[...state.Data,...payload]
        }
        default: return state;
    }
}