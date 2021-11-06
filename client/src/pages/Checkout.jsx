import React, { useState } from 'react';
import {BsShieldLockFill} from "react-icons/bs"
import FoodItem from "../Components/Cart/FoodItem";
import AddressList from '../Components/Checkout/AddressList';
import Razorpay from "razorpay";

//redux
import { useSelector,useDispatch } from 'react-redux';
import { createOrder } from '../Redux/Reducer/Order/order.action';
import { orderPlaced } from "../Redux/Reducer/Order/order.action";



function Checkout() {

    const reduxStateCart = useSelector((globalStore) => globalStore.cart.cart);
    const reduxStateUser = useSelector((globalStore) => globalStore.user.user.user);
    const dispatch = useDispatch();
    const [address] = useState([
        {
            name:"Home",
            address:"hostel, 1234 Yeleswaram",
        },
        {
            name:"Office",
            address:"office, 1234 Yeleswaram",
        },
        {
            name:"Gym",
            address:"Gym, 1234 Yeleswaram",
        },
    ]);

    const reduxState = useSelector((globalStore) => globalStore.cart.cart);

    const payNow = () => {
        let options = {
          key: "rzp_test_uirdxeKjC37x10",
          amount:
            reduxStateCart.reduce((acc, curVal) => acc + curVal.totalPrice, 0) *
            100,
          currency: "INR",
          name: "Zomato Clone",
          description: "Food Payment",
          image:
            "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png",
          handler: function (data) {
            alert("Payment Done");
            // console.log(data.razorpay_payment_id);
            dispatch(orderPlaced(reduxStateCart, data.razorpay_payment_id));
          },
          prefill: {
            name: reduxStateUser.fullName,
            email: reduxStateUser.email,
          },
          theme: {
            color: "#e23744",
          },
        };
    
        let razorPay = new window.Razorpay(options);
        razorPay.open();
      };

    return (
        <div className="my-8 flex flex-col  gap-3 items-center ">
            <h1 className="text-xl text-center md:text-2xl font-bold p-3 ">
                CheckOut

            </h1>
            <div className="w-full md:w-3/5 rounded-lg shadow-lg bg-white flex flex-col  items-center border-2 pt-20 pb-10 border-gray-900">
                <h3 className="text-lg font-semibold ">Summary</h3>
                <div className="flex w-full flex-col gap-2 items-center">
                    <h5 className="text-base tracking-wider ">ORDER NOW</h5>
                    <div className="flex w-full flex-col items-center text-gray-400">
                        <h4>Domino's Pizza</h4>
                        <small>SMRT Mall</small>

                    </div>
                    <div className="my-4 h-full overflow-y-scroll px-4 flex flex-col gap-2 w-full md:w-3/5">
                        {reduxState.map((food) =>(
                            <FoodItem {...food} key={food._id} />
                        ))};

                    </div>
                    <div className="flex flex-col gap-3 w-full md:w-3/5">
                        <h4 className="text-xl font-semibold "> Choose Address</h4>
                        <AddressList address={address} />

                    </div>

                </div>
                <button onClick={payNow} className="flex items-center gap-2 justify-center my-4 md:my-8 w-full px-4 md:w-4/5 px-0 h-14 text-medium text-lg bg-zomato-400  rounded-lg">
                    Pay Securely <BsShieldLockFill />
                </button>

            </div>

        </div>
    )
}

export default Checkout
