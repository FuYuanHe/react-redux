import reducer2 from "./counter1";
import reducer1 from "./counter2";
import {combineReducers} from '../../redux'
let reducers = {
    reducer1,
    reducer2
}
let combinedReducers = combineReducers(reducers)

export default combinedReducers
