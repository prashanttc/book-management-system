import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate , Link} from 'react-router-dom'

const Add = () => {

const[book, setBook] = useState({
  title:"",
  desc:"",
  price:null,
  cover:""
})
const navigate = useNavigate()

const handleChange = (e)=>{
  setBook(prev=>({...prev, [e.target.name]: e.target.value}))
}
const handleClick = async e=>{
  e.preventDefault()
  try{
await axios.post("http://localhost:8800/books" , book)
navigate("/Books")
}
catch(err){
console.log(err)
}}

  return (
    <div>
    <section className="bg-gray-50 dark:bg-gray-900">
<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6  sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                ADD NEW BOOK
            </h1>
            <form className="space-y-4 md:space-y-6 "  action="" autoComplete='off'>
                <div>
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input type="text" name="title" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter title" onChange={handleChange} required=""/>
                </div>
                <div>
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white " >Description</label>
                    <input type="text" name="desc" placeholder="enter description" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  onChange={handleChange} required=""/>
                </div>
                <div>
                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white " >Price</label>
                    <input type="number" name="price" placeholder="enter price" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  onChange={handleChange} required=""/>
                </div>
                <div>
                    <label htmlFor="cover" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white " >Cover</label>
                    <input type="text" name="cover" placeholder="select cover" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  onChange={handleChange} required=""/>
                </div>
              
                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleClick}><Link to="/books">Add</Link></button>
                <button className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" ><Link to="/books">Back</Link></button>
              
            </form>
        </div>
    </div>
</div>
</section>








  </div>
  )
}

export default Add