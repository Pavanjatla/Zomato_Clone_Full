import React, { useState,useEffect } from 'react';
import RestaurantNavbar from '../Components/Navbar/RestaurantNavbar';
import ImageGrid from '../Components/Restaurant/ImageGrid';
import RestaurantInfo from '../Components/Restaurant/RestaurantInfo';
import InfoButtons from '../Components/Restaurant/InfoButtons';
import { TiStarOutline } from 'react-icons/ti';
import { RiDirectionLine, RiShareForwardLine } from 'react-icons/ri';
import {BiBookmarkPlus} from "react-icons/bi";
import Tabs from '../Components/Restaurant/Tabs';
import CartContainer from '../Components/Cart/CartContainer';
import { useParams } from 'react-router-dom';
import {useDispatch} from "react-redux";

//redux
import {getSpecificRestaurant} from "../Redux/Reducer/restaurant/restaurant.action";
import {getImage} from "../Redux/Reducer/Image/Image.action";
//redux
import { getCart } from '../Redux/Reducer/Cart/cart.action';



function RestaurantLayout({children}) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCart());
        
    }, []);

    const {id} = useParams();

    const [restaurant , setRestaurant] = useState({
        images: [],
        name: "",
        cuisine: "",
        address: "",
        });

        useEffect(() =>{
            dispatch(getSpecificRestaurant(id)).then((data) =>{
                setRestaurant((prev) =>({
                    ...prev,
                    ...data.payload.restaurant,
                }));
                console.log(data)
                dispatch(getImage(data.payload.restaurant.photos)).then((data) => {
                    setRestaurant((prev) => ({
                      ...prev,
                      ...data.payload.image, 
                    }));
                  });
            });

        },[]);



    return (
       <>
       <RestaurantNavbar />
       <div className="container mx-auto px-4 lg:px-20 pb-10">
           <ImageGrid images={restaurant.images} />
           <RestaurantInfo name={restaurant?.name} 
            restaurantRating={restaurant?.restaurantRating || 0} 
            deliveryRating={restaurant?.deliveryRating ||0}
            cuisine={restaurant?.cuisine} 
            address={restaurant?.address} />

            <div className="my-4 flex flex-wrap gap-3">
                    <InfoButtons  isActive >
                        <TiStarOutline /> Add Review
                    </InfoButtons>

                    <InfoButtons>
                        <RiDirectionLine /> Direction
                    </InfoButtons>

                    <InfoButtons>
                        <BiBookmarkPlus /> BookMark
                    </InfoButtons>

                    <InfoButtons>
                        <RiShareForwardLine /> Share
            
                    </InfoButtons>

                </div>
                <div className="my-10">
                    <Tabs />

                </div>
                {children}

       </div>
       <CartContainer />
       
      
        
       
       </>
    )
}

export default RestaurantLayout
