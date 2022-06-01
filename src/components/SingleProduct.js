import { useState } from "react";
import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteproduct, fetchproducts, sortAction, updateproduct,unsortAction } from '../features/productSlice'
import {Link} from 'react-router-dom'
import Details from "./Details";

function SingleProduct(props)
{
    const dispatch = useDispatch()
    const {item} = props;
    const [id,setId] = useState(item.id);
    const [title,setTitle] = useState(item.title);
    const [image,setImage] = useState(item.image);
    const [price,setPrice] = useState(item.price);
    const [rating,setRating] = useState(item.rating);
    console.log(id);

    const [editId,SeteditId] = useState(null);
    const [edit,Setedit]= useState(false)
    const [newtitle,Setnewtitle]= useState(item.title)
    const [newprice,Setnewprice]= useState()
    const [newrating,Setnewrating]= useState("")

    const handeldelete=(id)=>{
        dispatch(deleteproduct(id))
        console.log("deleted")
        toast.error("Deleted !", {
          position: toast.POSITION.TOP_LEFT
        });
    
      }
    
      const values ={newtitle,newprice,newrating}
    
      function handelupdate({id}){
        dispatch(updateproduct(id,{values}))
        console.log(values)
      }

    
    return(
        <>
        <div key={props.id} className="items"> 
       <h3>{title}</h3>
        <img src={image} alt={title} />
        <>Price: {price} $</>
        <p>Rating :{rating}</p>
        <Link to={`/details/${id}`}> Details </Link>
        
          <button 
          className='btn btn-primary'
           onClick={()=>Setedit(true)}
          > Edit </button>
          
          <button 
          className='btn btn-danger '
          onClick={()=>handeldelete(id)}
          >Delete</button>
          


          {/* 
          <input value={props.title} onChange={(e)=>Setnewtitle(e.target.value)}/> 
          <input value={newprice} onChange={(e)=>Setnewprice(e.target.value)}/>
           <input value={newrating} onChange={(e)=>Setnewrating(e.target.value)}/>
          
          <button 
          className='btn btn-sucess'
          onClick={()=>handelupdate(props.id,{values})}
          > Save </button>
          
          <button 
          className='btn btn-warning'
          onClick={()=>Setedit(false)}
          > Cancel </button></></> 
          </div> */}
        
        
        </div>
        </>
        
        
    )

}
export default SingleProduct;