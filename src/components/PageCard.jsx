import React from 'react'

const PageCard = ({pageNumber, selected}) => {
  return (
    <div style={{color: selected === pageNumber ? 'white' : 'black', backgroundColor: selected === pageNumber ? 'red' : 'transparent'}} className='p-5 px-8 border-black border-2 border-opacity-20'>{pageNumber}</div>
  )
}

export default PageCard