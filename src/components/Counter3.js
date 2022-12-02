import React, {useRef,forwardRef } from 'react'
import Modal1 from './Modal1';
import Modal2 from './Modal2';
// 将actions由{add(){return {type:ADD}}} 变成{add(){dispatch(add())}}

const Counter3 = forwardRef(() => {
    const modalRef1 = useRef()
    const modalRef2 = useRef()
    const showModal1 = () => {
        modalRef1.current.setLook()
    }
    const showModal2 = () => {
        modalRef2.current.setLook()
    }
    return (
        <div>
        <button onClick={showModal1}>显示弹窗1</button>
        <button onClick={showModal2}>显示弹窗2</button>
        <Modal1 ref={modalRef1} />
        <Modal2 ref={modalRef2}></Modal2>
    </div>
    )
})
export default Counter3