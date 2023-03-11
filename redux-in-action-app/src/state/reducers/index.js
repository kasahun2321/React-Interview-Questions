import { combineReducers } from "redux"
import AccountReducer from "./accountReducer"


const reducers = combineReducers({
    account: AccountReducer
})

export default reducers;