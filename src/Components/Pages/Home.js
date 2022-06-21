import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading';
import Product from './Product';
const Home = () => {

    const [products,setProducts]=useState([])
    const [data,setData]=useState([])

    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(r=>setData(r))
    },[])



    // const { data:products, isLoading, refetch } = useQuery('product', () => fetch('product.json').then(res => res.json()))

    // if (isLoading) {
    //     <Loading />
    // }

    

    return (
        <div>
            <div>
                dashboard:
            </div>
            <div className='flex flex-row my-10'>
                <div className='flex justify-center items-center basis-4/6'>
                    items
                   
                    <div className='grid grid-cols-2 gap-2'>
                        {
                            (products).map(product=> <Product

                                key={product.id}
                                product={product}
                                
                            ></Product>)
                        }
                    </div>
                </div>
                <div className='flex  basis-4/12  sticky top-0 '>
                    <div class=" artboard w-full bg-base-200 phone-2  p-5 rounded">
                        <p>List of items that have been selected</p>
                        <div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;