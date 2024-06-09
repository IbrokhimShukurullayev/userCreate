import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    const count = useSelector(state =>  state.counter)
  return (
    <div>Header {count}</div>
  )
}

export default Header