import { useEffect, useState } from 'react';
import './App.css';
import {FaTrash} from 'react-icons/fa'
import {SiAddthis } from 'react-icons/si'
import {BsCheckSquareFill} from 'react-icons/bs'


function App() {


  const getLocalItems =() => {
    const todo = localStorage.getItem('todo');
    console.log(todo);
  
    if(todo){
      return JSON.parse(localStorage.getItem('todo'))
    } else {
      return [];
    }
  }
  
  const [data, setData] = useState(getLocalItems());
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if(input!==''){
      setData([...data, input]);
      setError(false)
    } else {
      setError(true);
    }
    setInput('');
    
  }

  const handleDelete = (e) => {
    setData(data.filter((item) => item !== e));
    setInput('');
  }

  const handleCheck = (e) => {
    
  }

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(data));
  }, [data])

  return (
    <div className="App flex items-center h-[100vh] justify-center flex-col bg-purple-400">
          <div className='text-4xl font-semibold text-yellow-300 mb-3'>
            To-Do
          </div>
      <div className="min-h-[30vh] bg-fuchsia-500 px-10 py-10 rounded-lg shadow-xl flex flex-col items-center min-w-[600px]">
          
        
        <div className='flex felx-row space-x-5'>
          
          <input 
          placeholder='add item'
          value={input}
          onChange={e => setInput(e.target.value)}
          className="px-3 py-2 outline-none rounded-lg w-full shadow-lg"
          />
          {/* <button
          onClick={handleClick}
          className="w-fit px-3 py-2 rounded-md bg-green-600 text-white"
          >Add
          </button> */}
          <SiAddthis 
          onClick={handleClick}
          
          className='text-5xl text-yellow-300 cursor-pointer'
          />
        
        </div>

        <div>
          {error && <p className='mt-5 text-yellow-300 text-lg border-2 px-5 border-yellow-300'>Enter a task</p>}
        </div>


        <div className='w-full mt-5'>
          {data.map((item) => (
            <div key={item} className="flex felx-row w-full shadow-xl bg-indigo-500 text-white px-5 py-1 mt-2 mb-2 justify-between items-center rounded-md h-[50px]">
              <div>{item}</div>

              <div className='flex space-x-3'>
                {/* <BsCheckSquareFill
                className=" text-yellow-300 text-xl cursor-pointer"
                onClick={e => handleCheck(item)}
                /> */}

                <FaTrash
                className=" text-yellow-300 text-xl cursor-pointer"
                onClick={e => handleDelete(item)}
                />
              </div>
              

            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
}

export default App;
