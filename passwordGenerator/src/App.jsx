import { useState, useCallback, useEffect , useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+~`|{}[]\:;?><,./-=';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]);

   useEffect(() => passwordGenerator(), [passwordGenerator, length, numberAllowed, charAllowed]);
   
   const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current.select(); // highlight the copied text
    // passwordRef.current.setSelectionRange(0, 3); // select only first 3 characters
     navigator.clipboard.writeText(password);
   }, [password]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-5 py-3 my-8 text-orange-500 bg-gray-700'>
      
        <h1 className='text-3xl text-center text-white my-3'>Passoword Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef} />
          <button className='bg-blue-700 text-white px-3 py-1 shrink-0'
           onClick={copyPasswordToClipboard}>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-2'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)} />
            <label>Length: {length}</label>
          </div>

          <div className='flex item-center gap-x-2'>
            <input type="checkbox" defaultValue={numberAllowed} id='numberInput'
              onChange={(e) => setNumberAllowed((prev) => !prev)} />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          
          <div className='flex item-center gap-x-2'>
            <input type="checkbox" defaultValue={charAllowed} id='charInput'
              onChange={(e) => setCharAllowed((prev) => !prev)} />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
