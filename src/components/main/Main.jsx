import React from 'react'
import { useDispatch } from 'react-redux'
import { inc } from '../../context/action'
import { DEC } from '../../context/action/type'
import { dec } from '../../context/action/decrement'

const Main = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Main</h2>
        <button onClick={()=> dispatch(inc()
        )}>increment</button>
        <button onClick={() => dispatch(dec())}>dec</button>
    </div>
  )
}

export default Main