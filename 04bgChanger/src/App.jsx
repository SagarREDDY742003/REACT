import './App.css'
import { useState } from 'react';

function App() {

  const [color, setColor] = useState('black');
  // function changeColor(color){
  //   setColor(color);
  // }
  return (
    <div className='w-full duration-200 h-screen' style={{backgroundColor: color}}> 
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor('green')} className='outline-none px-4 py-1 rounded-full bg-green-500 text-white shadow-lg'>Green</button>
          <button onClick={() => setColor('red')} className='outline-none px-4 py-1 rounded-full bg-red-500 text-white shadow-lg'>Red</button>
          <button onClick={() => setColor('blue')} className='outline-none px-4 py-1 rounded-full bg-blue-500 text-white shadow-lg'>Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
