import React from 'react'

const Chat = () => {
  return (
    <div className='flex flex-col items-center justify-between w-full h-screen bg-slate-800'>
        <div className='w-1/2'>
            <h2>Chat</h2>
        </div>
        <form className='flex flex-row items-center justify-center w-1/2 h-1/6 bg-slate-400 rounded-xl'>
            <input type='text' placeholder='Escribe tu mensaje' className='rounded-md p-2'></input>
            <button type='submit' className='bg-green-400 p-2 rounded-md'>Enviar</button>
        </form>
    </div>
  )
}

export default Chat