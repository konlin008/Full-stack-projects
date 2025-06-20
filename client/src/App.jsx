import axios from 'axios'
import './App.css'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [notes, setNotes] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8080/api/notes/')
      .then((res) => {
        setNotes(res.data.data)
      })
  }, [])
  console.log(notes);
  return (
    <div className='max-w-7xl mx-auto my-15' >
      <h1 className='text-2xl font-semibold '>All Your Notes in One Place </h1>
      <button className='bg-black text-white text-sm py-1.5 px-4 my-5 rounded-lg'>Add Note</button>
      <div className='flex flex-col space-y-5'>
        {
          notes?.map((note) => {
            return (
              <div className='w-full h-30 border-2 rounded-sm py-2 px-4 flex' key={note?._id}>
                <div className='h-full w-[90%] '>
                  <h2 className='text-xl font-semibold ' >{note?.title} </h2>
                  <p className='line-clamp-3 '>{note?.content}</p>
                </div>
                <div className='h-full w-[10%] flex flex-col justify-between py-3 items-center'>
                  <button className='border-2 py-[5px] px-[20px] rounded-lg bg-black text-white'>Edit</button>
                  <button className='border-2 py-1 px-3 rounded-lg'>Delete</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
