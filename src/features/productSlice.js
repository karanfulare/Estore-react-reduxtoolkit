import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState ={
    loading:false,
    products:[],
    error:'',
    product:{
        title:"",
        image:"",
        description:"",
        price:""
    }
}


export const fetchproducts = createAsyncThunk('product/fetchproducts',()=>{
    return axios 
    .get(`https://my-json-server.typicode.com/karanfulare/products/products`)
    .then(resp=>resp.data)
})

export const addproducts = createAsyncThunk(
    'product/addproducts',
async({values})=>{
    return fetch(`https://my-json-server.typicode.com/karanfulare/products/products`,{
       method:'POST',
       headers:{
           Accept:'application/json',
           "Content-type":'application/json'
       },
       body:JSON.stringify({
           title:values.title,
           description:values.description,
           price:values.price,
           image:values.image
       })
    }).then((resp => resp.json()))
}
)

export const deleteproduct = createAsyncThunk(
    'products/deleteproduct',
    async(id)=>{
        return fetch(`https://my-json-server.typicode.com/karanfulare/products/products/${id}`,{
            method:'DELETE'
           })
           .then((res)=>{res.json()})
           .then((data) =>{console.log('data',data); return {'id':id}})
           .catch((err) => {console.log('error')});
    }
);

export const updateproduct = createAsyncThunk(
    'product/updateproduct',
    async(id,{values})=>{
        return fetch(`https://my-json-server.typicode.com/karanfulare/products/products/${id}`,{
            method:'PUT',
            headers:{
                Accept:'application/json',
                "Content-type":'application/json'
            },
            body:JSON.stringify({
                title:values.newtitle,
                price:values.newprice,
                rating:values.newrating
            })
        }).then((res)=>res.json());
    }
);

const productSlice = createSlice({
    name:"myproduct",
    initialState,
    reducers:{
        getProduct:(state,action)=>{          // for details page
            state.product = state.products.find((el) => el.id == action.payload)
        },
        addtocart:(state,action)=>{
            state.cart = state.cart.push(action.payload)
        },
        removefromcartaction:(state,action)=>{
            state.cart = state.cart.pop()   // not working
        },
        sortAction:(state,action)=>{
            let sorted = state.products.sort(function(item1,item2){
                      if (item1.price < item2.price) return -1;
                      if (item1.price > item2.price) return 1;
                      return 0;
                  })
                  state.products = sorted;
        },
        unsortAction:(state,action)=>{
            state.products = state.products.sort(function(item1,item2){
                if (item1.price < item2.price) return 1;
                if (item1.price > item2.price) return -1;
                  return 0;
            });
        }
    },
    extraReducers:builder=>{
        builder.addCase(fetchproducts.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchproducts.fulfilled,(state,action)=>{
            state.loading=false
            state.products= action.payload
            state.error=''
        })
        builder.addCase(fetchproducts.rejected,(state,action)=>{
            state.loading = false
            state.products = []
            state.error = action.error.message
        })
        builder.addCase(addproducts.pending,(state,action)=>{
            state.loading=true
        })
        builder.addCase(addproducts.fulfilled,(state,action)=>{
            state.loading = false
            state.products= state.products.concat(action.payload)
            state.error = ''
        })
        builder.addCase(addproducts.rejected,(state,action)=>{
            state.loading = false
            state.error =action.error.message
        })
        builder.addCase(deleteproduct.pending,(state,action)=>{
            state.loading=true
        })
        builder.addCase(deleteproduct.fulfilled,(state,action)=>{
            state.loading=false 
             state.products =  state.products.filter( item => item.id !== action.payload.id );
             state.error=''
        })
        builder.addCase(deleteproduct.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        })
        builder.addCase(updateproduct.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(updateproduct.fulfilled,(state,action)=>{
            state.loading = false
            state.products = action.payload
        })
        builder.addCase(updateproduct.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        })

    }
})

export const {getProduct} = productSlice.actions;
export const {addtocart} = productSlice.actions;
export const {removefromcartaction} = productSlice.actions;
export const {sortAction} = productSlice.actions;
export const {unsortAction} = productSlice.actions;
export default productSlice.reducer ;
