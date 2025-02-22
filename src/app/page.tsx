"use client"
import React, { useState} from 'react'

const Page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState<any[]>([])

  const submitHandler = (e:any) =>{
    e.preventDefault()
    setMainTask([...mainTask, {title, desc}]);
    setTitle("")
    setDesc("")
  };
  const deleteHandler =(i:any) =>{
    const copyTask = [...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)

  };

  let renderTask:any = <h2>No Task Avalaible</h2>;

  if (mainTask.length > 0){
    renderTask = mainTask.map((t,i) => {
      return(
      <div key={i}>
      <li className='flex items-center justify-between mb-8'>
        <div className='flex items-center justify-between mb-5 w-2/3'>
      <h5 className='text-2xl font-semibold'>{t.title}</h5>
      <h6 className='text-lg font-medium'>{t.desc}</h6></div>
      <button onClick={()=>{deleteHandler(i)}} className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
      </li>
     </div>
      )
  })
 }
 
  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Khizra's Todo List</h1>
      <form onSubmit={submitHandler}>
        <input type="text" className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' placeholder='Enter Title Here' value={title} onChange={(e) => {
          setTitle(e.target.value)
        }}/>
        <input type="text" className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' placeholder='Enter Description Here' value={desc} onChange={(e) => {
          setDesc(e.target.value)
        }}/>
        <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add task</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>

      </div>
    </>
  )
}

export default Page
