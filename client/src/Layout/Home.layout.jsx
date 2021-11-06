import React, {useEffect} from 'react'
import DeliveryCarousel from '../Components/Delivery/DeliveryCarousel';
import FoodTab from '../Components/FoodTabs';
import Navbar from '../Components/Navbar';

//redux
import {useDispatch} from "react-redux";
import { getCart } from '../Redux/Reducer/Cart/cart.action';

function Homelayout({children}) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCart());
        
    }, []);

    return (
        <div>
            <Navbar />

            <FoodTab />


            <div className="container mx-auto px-4 lg:px-20">{children}</div>
            
        </div>
    );
}

export default Homelayout;