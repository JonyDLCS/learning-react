import React from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import { useAxiosGet } from '../Hooks/HttpRequests';

function Product() {
    const { id } = useParams()
    const url = `https://65ba899bb4d53c06655325e6.mockapi.io/products/${id}`;
    let content = null;
    let product = useAxiosGet(url)

    if(product.loading){
        content = <Loader/>
    }

    if(product.error){
        content = <h1>There was an error, product may not exist</h1>
    }


    if (product.data) {
        content = 
            <div>
                <h1 className='text-2xl font-bold mb-3'>
                    {product.data.name}
                </h1>
                <div>
                    <img 
                        className=' max-h-[50vh] rounded-sm'
                        src={product.data.images[0].imageURL}
                        alt={product.data.name}/>
                </div>
                <div className='font-bold text-xl mb-3'>
                    $ {product.data.price}
                </div>
                <div>
                    {product.data.description}
                </div>
            </div>
        
    } 

    return (
        <div className='p-3'>
            {content}
        </div>
    );

}

export default Product