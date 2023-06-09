import React, { useEffect, useState } from 'react';
import DiscountCard from './DiscountCard/DiscountCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Discount = () => {

    const [discount,setDiscount] = useState([])
    useEffect(()=>{
        fetch('https://toy-galaxy-assignment-11-server.vercel.app/discount')
        .then(res=>res.json())
        .then(data=>{
            setDiscount(data)
        })
    },[])
    
    return (
        <div className='nav-design my-5 '>
            <h1 className='text-center md:text-5xl my-6 '>Get up to 40% discount </h1>
            <div className='grid md:grid-cols-4 gap-2'>
            {
                discount.map(card=><DiscountCard
                key={card._id}
                card={card}
                ></DiscountCard>)
            }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Discount;