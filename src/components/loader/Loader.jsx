import React from 'react'
import Animation from './animation/Animation'
import Encript from './encript/Encript'
import Books from './books/Books'

const Loader = () => {
  return (
    <div className='w-full h-screen bg-black fixed top-0 z-[1000] flex flex-col items-center justify-center'>
        <div className='relative w-full h-1/3'>
            {/* <Animation/> */}
            <Books></Books>
        </div>
{/*         <div className='h-1/4 w-full'>
            <Encript></Encript>
        </div> */}
    </div>
  )
}

export default Loader