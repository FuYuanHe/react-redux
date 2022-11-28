import React, { Component } from 'react'
import { createStore,bindActionCreators } from '../redux'

const ADD = 'ADD'
const ODD = 'ODD'

function reducer(state = { number: 0 }, action) {
    switch (action.type) {
        case ADD:
            return { number: state.number + 1 }
        case ODD:
            return { number: state.number - 1 }
        default:
            return state;
    }
}
let store = createStore(reducer)
function add(){
    return {type:ADD}
}
function odd(){
    return {type:ODD}
}
const actions = {add,odd}
const bindActions = bindActionCreators(actions,store.dispatch)
console.log(bindActions);
// 将actions由{add(){return {type:ADD}}} 变成{add(){dispatch(add())}}
export default class Counter1 extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
    }
    componentDidMount(){
        this.unSub = store.subscribe(()=>{
            this.setState(store.getState())
        })
    }
    componentWillUnmount(){
        this.unSub()
    }
    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={bindActions.add}>增加</button>
                <button onClick={bindActions.odd}>减少</button>
            </div>
        )
    }
}
