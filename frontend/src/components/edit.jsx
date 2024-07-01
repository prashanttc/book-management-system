import React, { useEffect, useState } from "react";
import { Link , Outlet} from "react-router-dom";
import axios from "axios";

const edit = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  return (
    <div>
     <div className="relative">
     <div className='main flex box w-full  text-white'>
     <div className='sidebar flex flex-col overflow-hidden w-[20%] min-h-[100vh] z-10 fixed bg-gray-800 pt-10'>
      <h1 className='head  text-4xl pl-20  mb-20'> Control Panel</h1>
      <ul className='flex flex-col  text-2xl '>
      <li className='w-full flex h-[100px] hover:scale-90 transition duration-500  ease-in-out   border-b-[1px] border-slate-500 items-center justify-center'>
         <Link to="/Books"> Home </Link>
       </li>
       <li className='w-full flex h-[100px] hover:scale-90 transition duration-500  ease-in-out  border-b-[1px] border-slate-500 items-center justify-center'>
         <Link to="/Add"> Add new book </Link>
       </li>
       <li className='w-full flex h-[100px] hover:scale-90 transition duration-500  ease-in-out  border-b-[1px] border-slate-500 items-center justify-center'>
         <Link to="/Remove"> Delete book </Link>
       </li>
      </ul>
      </div> 
      <div className='w-[80%] absolute right-0 text-black'> <div className='h-20 flex text-black   text-4xl font-semibold drop-shadow-2xl bg-white items-center justify-center w-full '>Update books</div> <Outlet/>
      <div className="book w-full grid grid-cols-3 gap-5 gap-y-20 p-20">
         {books.map((book) => (
           <div className="book flex flex-col items-center" key={book.id}>
             {book.cover && <img src={book.cover}  className="w-[400px] h-[500px] mb-5 bg-blue-200"/>}
             <h2 className="text-4xl mb-5 font-medium">{book.title}</h2>
             <p>{book.desc}</p>
             <span className="font-bold">${book.price}</span>
            <div className="flex gap-5 text-white mt-5">
               <button className="rounded-3xl px-[40px] py-[15px] border-2 bg-green-600/80  hover:bg-green-600"><Link to={`/Update/${book.id}`}>Update</Link></button>
            </div>
           </div>
         ))}
       </div></div>
      </div>
   
     </div>
    </div>
   )
};

export default edit;
