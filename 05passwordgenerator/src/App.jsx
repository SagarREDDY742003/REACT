import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"
    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length,numberAllowed,charAllowed])

  useEffect(() => {
    generatePassword()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    // alert('copied')
  }
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-900 text-white my-4'>
      <h1 className='text-3xl font-bold mb-2 text-center'>PASSWORD GENERATOR</h1>
      <div className='flex shadow rounded-lg overflow-hidden'>
        <input type='text' value={password} className='outline-none w-full py-1 px-3 text-blue-500 font-bold' placeholder='Password' readOnly ref={passwordRef} />
        <button className='outline-none bg-orange-400 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>copy</button>
      </div>

      <div className='flex text-sm gap-x-2 my-3'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={4} max={20} value={length} className='cursor-pointer' onChange={(e) => setLength(e.target.value)} />
          <label htmlFor='length'>Length: {length}</label>
        </div>
      </div>

      <div className='flex text-sm gap-x-2 my-3'>
        <div className='flex items-center gap-x-1'>   
          <input type="checkbox" defaultChecked={numberAllowed} onChange={() => {setNumberAllowed((prev) => !prev)}} value="" />
          <label htmlFor='number'>Numbers</label>
        </div>
      </div>

      <div className='flex text-sm gap-x-2 my-3'>
        <div className='flex items-center gap-x-1'>   
          <input type="checkbox" defaultChecked={charAllowed} onChange={() => {setCharAllowed((prev) => !prev)}} value="" />
          <label htmlFor='character'>Characters</label>
        </div>
      </div>

    </div>
  )
}

export default App
