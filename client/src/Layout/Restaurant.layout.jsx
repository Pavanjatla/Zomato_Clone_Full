import React, { useState } from 'react'
import RestaurantNavbar from '../Components/Navbar/RestaurantNavbar';
import ImageGrid from '../Components/Restaurant/ImageGrid';
import RestaurantInfo from '../Components/Restaurant/RestaurantInfo';



function RestaurantLayout({children}) {

    const [restaurant , setRestaurant] = useState({
        images: [
            "https://b.zmtcdn.com/data/pictures/4/19661324/87a5c17c03666f6adc7fe5f0378c4095.jpg",
            "https://b.zmtcdn.com/data/pictures/chains/4/19661324/9afa14e3bfb56780332464e457019b5b.jpg",
            "https://b.zmtcdn.com/data/reviews_photos/c22/ce297cb16332fa4974941227c44eac22_1618340672.jpg",
            "https://b.zmtcdn.com/data/pictures/4/19661324/75bbd18943ab1119c2848186c62a5d1d.jpg",
            "https://b.zmtcdn.com/data/dish_photos/710/22f2975bde4cefb6c34fcb9d66f42710.jpg",
          ],

          name: "The Indo-Asian Kitchen",
          cuisine: "North Indian, Chinese, Kebab, Mughlai",
          address: "Karol Bagh, New Delhi",
          restaurantRating: 4.3,
          deliveryRating: 3.5,
        });

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

       </div>
      
        {children}
       
       </>
    )
}

export default RestaurantLayout
