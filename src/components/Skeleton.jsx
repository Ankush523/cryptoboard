import React from 'react'

const Skeleton = ({className}) => {
  return (
    <div className='animate-pulse'>
        <div className={`bg-gray-300 rounded-md ${classname}`}></div>
    </div>
  )
}

export default Skeleton