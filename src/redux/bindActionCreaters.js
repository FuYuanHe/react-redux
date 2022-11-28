function bindActionCreators(actions,dispatch){
    let bindActions = Object.create(null)
    for(let key in actions){
        bindActions[key] = ()=>{
            dispatch(actions[key]())
        }
    }
    return bindActions
}
export default bindActionCreators