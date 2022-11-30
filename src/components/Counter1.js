import React, { Component } from 'react'
import { bindActionCreators } from '../redux'
import actions  from '../store/actions/counter1';
import store from '../store'

const bindActions = bindActionCreators(actions,store.dispatch)
console.log(bindActions);
// 将actions由{add(){return {type:ADD}}} 变成{add(){dispatch(add())}}
export default class Counter1 extends Component {
    constructor(props) {
        super(props)
        console.log(store.getState());
        this.state = store.getState().reducer1
    }
    componentDidMount(){
        this.unSub = store.subscribe(()=>{
            this.setState(store.getState().reducer1)
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
