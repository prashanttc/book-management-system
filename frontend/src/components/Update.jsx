import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate , Link, useLocation} from 'react-router-dom'

const Update = () => {

const[book, setBook] = useState({
  title:"",
  desc:"",
  price:null,
  cover:""
})
const navigate = useNavigate()
const location = useLocation()
const bookid = location.pathname.split("/")[2]

const handleChange = (e)=>{
  setBook(prev=>({...prev, [e.target.name]: e.target.value}))
}
const handleClick = async e=>{
  e.preventDefault()
  try{
await axios.put("http://localhost:8800/books/" + bookid , book)
navigate("/Books")
}
catch(err){
console.log(err)
}}

  return (
 <div className='flex flex-col p-0 justify-center items-center w-screen h-screen'> 
 <h1 className='mb-10 text-4xl font-bold'>UPDATE THE BOOK</h1>
   <form action="" autoComplete='off' className='main w-[40%] rounded-3xl drop-shadow-2xl h-[80%] flex flex-col items-center bg-slate-200'>
  <div className=' p-20 pb-10 text-lg'>
  <input className='w-full mb-10 p-10 placeholder focus:outline-none  bg-slate-100 h-20 ' type="text" placeholder="enter title" onChange={handleChange} name="title"/>
  <input className='w-full mb-10 p-10 placeholder focus:outline-none bg-slate-100 h-20 ' type="text" placeholder="enter description" onChange={handleChange} name="desc"/>
  <input className='w-full mb-10 p-10 placeholder focus:outline-none bg-slate-100 h-20 ' type="number" placeholder="enter price" onChange={handleChange} name="price"/>
  <input className='w-full mb-10 p-10 placeholder focus:outline-none bg-slate-100 h-20 ' type="text" placeholder=" select cover" onChange={handleChange} name="cover"/>
<button className='w-full bg-green-500 hover:bg-green-600 text-white h-[50px] rounded-md' onClick={handleClick}>Add</button>
<button className='w-full bg-slate-500 hover:bg-slate-600 text-white mt-5 h-[50px] rounded-md'><Link to="/Books">back</Link></button>
</div>
   </form>
 </div>
  )
}

export default Update
