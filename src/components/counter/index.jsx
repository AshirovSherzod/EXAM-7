import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

import './counter.scss'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../context/counterSlice'

const Counter = () => {
    const counter = useSelector( state => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div className="counter">
            <button disabled={ counter <= 0 } onClick={()=> dispatch(decrement())}><FaMinus /></button>
            <button>{counter}</button>
            <button onClick={()=> dispatch(increment())}><FaPlus /></button>
        </div>
    )
}

export default Counter