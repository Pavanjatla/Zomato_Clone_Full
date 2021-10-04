import React from 'react'
import FoodItem from './FoodItem'

function FoodList(props) {
    return (
        <>
            <div className="">
                <h2 className="bg-white top-0 w-full px-2 py-1 z-10 sticky text-xl font-semibold">
                    {props.name}
                </h2>
                <div className="flex gap-3 flex-col">
                    {props.items.map((item) =>(
                        <FoodItem key={item._id} {...item} />
                    ))}

                </div>

            </div>

        </>
    )
}

export default FoodList
