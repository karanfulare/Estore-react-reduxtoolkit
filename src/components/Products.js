import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteproduct, fetchproducts, sortAction, updateproduct } from '../features/productSlice'
import {Link} from 'react-router-dom'

function Products() {
    const data = useSelector(state => state.myproduct)
  const dispatch = useDispatch()

  const [sort,Setsort] = useState("Sort")
  const [val,SetVal]= useState(true)
  const [edit,Setedit]= useState(false)
  const [newtitle,Setnewtitle]= useState("")
  const [newprice,Setnewprice]= useState("")
  const [newrating,Setnewrating]= useState("")

  function fetch(){
    dispatch(fetchproducts())
  }

  const handeldelete=({id})=>{
    dispatch(deleteproduct({payload:id}))
    console.log("deleted")
  }

  const values ={newtitle,newprice,newrating}
  function handelupdate({id}){
    dispatch(updateproduct(id,{values}))
    console.log(values)
  }

  function handelsort(){
    SetVal(!val)
   if(val){Setsort("Unsort")}
   else{Setsort("sort")}
   dispatch(sortAction())
  }

  return (
    <div className='container'>
      <h2>List of Products</h2>
      <button onClick={fetch}>fetch</button>
      <div><button className='btn btn-light' onClick={handelsort}> {sort}</button></div>
      {data.loading && <div>Loading...</div>}
      {!data.loading && data.error ? <div>Error: {data.error}</div> : null}
      {!data.loading && data.products.length ? (
        
        <ul>
          {data.products.map(i => (
            <div key={i.id} className="items"> 
            <>{!edit?(<h3>{i.title}</h3>):<input value={i.title} onChange={(e)=>Setnewtitle(e.target.value)}/>}</>  
           <> <img src={i.image} alt={i.title} /> </> 
           <div>
            <>{!edit?(<>Price: {i.price} $</>):<input value={i.price} onChange={(e)=>Setnewprice(e.target.value)}/>}</>
            <>{!edit?(<p>Rating :{i.rating}</p>):<input value={i.rating} onChange={(e)=>Setnewrating(e.target.value)}/>}</>
            <Link to={`/details/${i.id}`}> Details </Link>
               <>{!edit?(<><button 
                className='btn btn-primary'
                onClick={()=>Setedit(true)}
                > Edit </button>
                
                <button 
                className='btn btn-danger '
                onClick={()=>handeldelete(i.id)}
                >Delete</button></>):
                <>
                <button 
                className='btn btn-sucess'
                onClick={()=>handelupdate(i.id,{values})}
                > Save </button>
                
                <button 
                className='btn btn-warning'
                onClick={()=>Setedit(false)}
                > Cancel </button></>}</> 
                </div></div>
          ))}
        </ul>
        
      ) : null}
    </div>
    
  )
}
    

export default Products;