import React, { useState,useEffect } from 'react';
import { AiOutlineCompass } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import FloatMenuBtn from '../Components/Restaurant/Order-Online/FloatMenuBtn';
import FoodList from '../Components/Restaurant/Order-Online/FoodList';
import MenuListContainer from '../Components/Restaurant/Order-Online/MenuListContainer';

//redux
import {useSelector, useDispatch} from "react-redux";
import {getFoodList} from "../Redux/Reducer/Food/food.action"

function OrderOnline() {
    const dispatch = useDispatch();
    const [menu, setMenu] =useState([]);

    const [selected, setSelected] = useState("");

    const reduxState = useSelector(
        (globalStore)=> globalStore.restaurant.selectedRestaurant.restaurant);

        
    const onClickHandler =(e) =>{
        if (e.target.id){
            setSelected(e.target.id);
        }
        return;
    };
        useEffect(() => {
            if(reduxState){
                dispatch(getFoodList(reduxState.menu)).then((data)=>{
                    if(data.payload.menus){
                        setMenu(data.payload.menus.menus)
                    }
                });
            }
        }, [reduxState])

    return (
        <>
            <div className="w-full h-screen flex">
               <aside className="hidden md:flex flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
               
                    {/* component */}
                    {menu.map((item) =>(
                        <MenuListContainer 
                            {...item} 
                            key={item._id} 
                            onClickHandler={onClickHandler} 
                            selected={selected} />

                    ))}
               </aside>
               <div className="w-full px-3 md:w-3/4">
                   <div className="pl-3 mb-4">
                       <h2 className="text-xl font-semibold ">Order Online </h2>
                       <h4 className="flex items-center gap-2 font-light text-gray-500 ">
                           <AiOutlineCompass /> Live Track your order | <BiTimeFive /> 45 Min
                       </h4>

                   </div>
                   <section className="flex h-screen overflow-y-scroll flex-col gap-3 md:gap-5">
                       {/* component Foodlist */}
                       {menu.map((item)=>(
                           <FoodList {...item} key={item._id} />
                       ))}
                   </section>

               </div>

            </div>

            {/* component floatMenuButton */}
            <FloatMenuBtn 
                menu={menu} 
                onClickHandler={onClickHandler} 
                selected={selected}/>
                
        </>
    )
}

export default OrderOnline