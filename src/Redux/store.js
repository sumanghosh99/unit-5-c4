import {createStore} from "redux";
import {dataReducer} from "./Reducer";
export const store=createStore(dataReducer);