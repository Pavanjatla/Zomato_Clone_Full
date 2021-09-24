import React from 'react'
import DeliveryCarousel from '../Components/Delivery/DeliveryCarousel';
import FoodTab from '../Components/FoodTabs';
import Navbar from '../Components/Navbar';

function Homelayout({children}) {
    return (
        <div>
            <Navbar />

            <FoodTab />


            <div className="container mx-auto px-4 lg:px-20">{children}</div>
            
        </div>
    );
}

export default Homelayout;
