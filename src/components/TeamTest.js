import React,{ forwardRef } from 'react'

export default forwardRef(function TeamTest(props,team) {
  return (
    <div ref={team} className='teamtest'>TeamTest</div>
  )
})
