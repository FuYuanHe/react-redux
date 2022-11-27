// 先单独使用redux
import { createStore } from 'redux'


// 获取dom元素
let counterP = document.getElementById('counterP')
let add = document.getElementById('add')
let odd = document.getElementById('odd')
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

function render() {
  counterP.innerHTML = store.getState().number
  add.addEventListener('clock',()=>{
    store.dispatch({type:ADD})
  })
  odd.addEventListener('clock',()=>{
    store.dispatch({type:ODD})
  })
}
render()








// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );