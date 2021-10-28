import React from 'react';
import {FaUserAlt} from "react-icons/fa";
import {AiOutlineArrowLeft} from "react-icons/ai";

function CheckoutNavbar() {
    return (
        <>
            <nav className="p-4 py-2 flex bg-white shadow-md lg-shadow-none w-full items-center">
                <div className="container px-4 md:px-20 mx-auto">
                    <div className="flex w-full justify-between items-center">
                        <AiOutlineArrowLeft />
                        <div className="w-28"> 
                            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo" className="w-full h-full" />

                        </div>
                        <div className="flex items-center gap-3 ">
                            <div className="border p-1 border-gray-300 text-zomato-400 w-12 h-12 rounded-full">
                                <img src="https://yt3.ggpht.com/yti/APfAmoFkhIt9OplVRZrX04_edNQNrfgIBWPz4ZSahnvnpwA=s88-c-k-c0x00ffffff-no-rj-mo" alt="pavan sai" className="w-full h-full rounded-full object-center object-cover" />

                            </div>
                            Pavan Sai Ram

                        </div>

                    </div>

                </div>

            </nav>
        </>

    )
}

export default CheckoutNavbar
