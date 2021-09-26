import React from 'react';
import {BsStarFill, BsStarHalf, BsStar} from "react-icons/bs";
import ReactStars from "react-rating-stars-component";
function NutritionCard(props) {
    return (
        <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <div className="w-full h-full bg-white rounded-2xl shadow-lg">
                <div className={`w-full h-56 p-4 rounded-t-2xl bg-${props.bg}-100`}>
                    <img src={props.image} alt="suppliments" className="w-full h-full" />

                </div>
                <div className="flex mt-2 items-center gap-3 p-3 ">
                    <div className="w-4 h-4">
                        <img src="https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png" alt="veg" className="w-full h-full" />

                    </div>

                    <ReactStars count={5} size={16} isHalf={true} value={3} emptyIcon={<BsStar />} halfIcon={<BsStarHalf />} fullIcon={<BsStarFill />} activeColor="#ffd700" />

                    <span className="text-gray-400 "> 15 </span>

                </div>
                <h3 className="text-xl font-bold text-gray-700 p-3"> Burn -Weight Balance </h3>
                <p className="text-sm font-light text-gray-400 px-3">This Formula with Vfill technology will help improve metabolism and suffort fat burn</p>
                <div className="mt-4">
                    <hr />
                </div>
                <div>
                    <span>
                        <span className="text-gray-300 font-light mr-3 p-2">$600</span>
                        <strong>$320</strong>
                    </span>
                    <p className="p-3">Month Pack - 30 Capsules</p>

                </div>
            </div>
            
        </div>
    )
}

export default NutritionCard
