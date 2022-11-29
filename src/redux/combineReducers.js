function combineReducers(reducers) {
    return function combintion(state={},action) {
        let nextState = Object.create(null)
        for (let key in reducers) {
            nextState[key] = reducers[key](state[key],action)
        }
        return nextState
    }
}
export default combineReducers