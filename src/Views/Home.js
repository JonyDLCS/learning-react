import React from 'react'
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';
import { useAxiosGet } from '../Hooks/HttpRequests';

function Home() {
    const url = `https://65ba899bb4d53c06655325e6.mockapi.io/products`;
    
    let products = useAxiosGet(url)
    let content = null;

    


    if(products.loading){
        content = <Loader/>
    }

    if(products.error){
        content = <h1>There was an error, product may not exist</h1>
    }

    if (products.data) {
        content = 
            products.data.map((product)=>
            <div key={product.id} className='flex justify-center'>
                <ProductCard product={product}/>
            </div>)
        
    } 

  return (
    <div className='p-3'>
        <h1 className=' font-bold text-xl' >Best Sellers</h1>
        {content}
    </div>
  )
}

export default Home