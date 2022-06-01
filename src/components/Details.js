import {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {getProduct,addtocart,removefromcartaction} from '../features/productSlice'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Details(){
    const params = useParams();
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getProduct(params.id))
    },[])

    const productdetail = useSelector((state)=> state.myproduct.product)


    const {title,image,description,price,category}= productdetail;

    function addToCart({ id } = {}){
     //dispatch(addToCart(id));
     dispatch(addtocart({ payload: id }));
    console.log("working")
    toast.success("Added to Cart !", {
        position: toast.POSITION.TOP_CENTER
      });
    }

  

    console.log(params)
    return(
        <>
        <div className='container'>
        <ToastContainer />
             <img style={{height:"300"}}src={image} alt={title}/>
            <h1 style={{color:"#009cff"}}>{title}</h1>
           <h5> Description: {description}</h5>
          <h3 style={{color:"gold"}}>  Price: {price} $</h3> 
          <h4 style={{color:"rebeccapurple"}}>  Category: {category} </h4> 
        </div>
        <button 
            className='btn btn-warning'
            onClick={addToCart}
            > Add to cart </button>
        <br/>
       
        
        </>
    )
}

export default Details;