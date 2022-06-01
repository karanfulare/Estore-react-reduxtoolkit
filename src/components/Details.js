import {useEffect} from 'react';
import { useNavigate , useParams } from 'react-router-dom';
import {useDispatch,useSelector,us} from 'react-redux';
import { add } from '../features/cartSlice'
import {getProduct,addtocart} from '../features/productSlice'
import Navbar from './Navbar';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Details(){
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const productdetail = useSelector((state)=> state.myproduct.product)
    
    useEffect(()=>{
        dispatch(getProduct(params.id))
    },[productdetail])

    


    const {title,image,description,price,category}= productdetail;

    function addToCart(id){
     //dispatch(addToCart(id));
     dispatch(addtocart(id));
    
    }

    const handleAdd = (product) => {
        dispatch(add(product));
        console.log("working")
    toast.success("Added to Cart !", {
        position: toast.POSITION.TOP_CENTER
      });
    };

  

    console.log(params)
    return(
        <>
        <Navbar/>
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
            onClick={() => handleAdd(productdetail)}
            > Add to cart </button>
        <br/>
        <button 
            className='btn btn-secondary'
            onClick={()=>navigate('/cart')}
            >  go to cart </button>
       
        
        </>
    )
}

export default Details;