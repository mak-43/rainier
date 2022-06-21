import React from 'react';

const Product = ({product}) => {
    const {id,product_id,qty,box_no,unit,unit_price,note}=product
    
    return (
        <div className='bg-base-200 py-2 '>
            <div className=' flex gap-2 '>
                <div className='bg-red-400 py-5 px-2 text-white '>150 X 150 </div>
                <div className='flex flex-col justify-center items-center'>
                    <p>{box_no}</p> 
                    <p >{note.length>10?note.slice(0,20)+'...':note}</p>   
                 </div>
                <div className='flex flex-col  gap-2 justify-end items-end'>
                    <button className='bg-slate-400 px-2 rounded'>Add to list</button>
                    <button className='bg-slate-400 px-2 rounded'>Details</button>
                </div>
            </div>
        </div>
    );
};

export default Product;