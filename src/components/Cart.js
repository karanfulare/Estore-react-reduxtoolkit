import React,{useEffect} from "react";
import {removefromcartaction} from '../features/productSlice'
import {useDispatch,useSelector} from 'react-redux';


function Cart(){
    const dispatch = useDispatch();
        
// useEffect(()=>{
//     dispatch()
// },[])

function removefromcart(id){
        dispatch(removefromcartaction({ payload: id }));
    }

    return (
        <>
        <div className="container">
        <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src="..." alt="Card cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button 
            className='btn btn-danger'
            onClick={removefromcart}
            > Remove from Cart </button>
  </div>
</div>
        </div>
        </>
    )
}

export default Cart;