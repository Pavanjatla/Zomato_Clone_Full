import React, { useState } from 'react';
import {Link, useParams} from "react-router-dom";
import Slider from 'react-slick';
import {IoMdArrowDropright} from "react-icons/io";
import ReactStars from 'react-rating-stars-component';
import {NextArrow,PrevArrow} from "../Components/CarouselArrows";
import MenuCollection from '../Components/Restaurant/MenuCollection';
import MenuSimilarRestaurantCard from '../Components/Restaurant/MenuSimilarRestaurantCard';
import ReviewCard from '../Components/Restaurant/ReviewCard';
import Mapview from '../Components/Restaurant/Mapview';

function Overview() {

    const {id} =useParams();

    const [menuImages, setMenuImages] = useState([

        "https://b.zmtcdn.com/data/menus/593/18233593/5b969d0a3ba13ae80c0df1e0d7447b02.jpg",
        "https://b.zmtcdn.com/data/menus/593/18233593/a181458955e1390aa366c636c2d3f0d5.jpg",
    ]);

    const [reviews , setReviews] =useState([

        {
            image :"https://yt3.ggpht.com/yti/APfAmoFkhIt9OplVRZrX04_edNQNrfgIBWPz4ZSahnvnpwA=s88-c-k-c0x00ffffff-no-rj-mo",
            userName: "Pavan",
            isRestaurantReview: true,
            createdAt: "2020-06-01T12:00:00.000Z",
            reviewText: "This place is a must visit.",
          },
          {
            image :"https://lh3.googleusercontent.com/-ytkr_BH-YRk/XuNVWi4M3yI/AAAAAAAAAAA/FFn8ToAV7voexNxutLroA5Pfujlc8JhAgCOQCEAE/s340-p-k-rw-no/photo.jpg",
            userName: "Deepak",
            isRestaurantReview: true,
            createdAt: "2020-06-01T12:00:00.000Z",
            reviewText: "This place is a must visit.",
          },
          {
            image :"https://lh3.googleusercontent.com/-NelZwZNpjUk/XuNYBIjzoNI/AAAAAAAAAAA/DeLVl6r1LZYceQpbptFQdiQZ56mghea2wCOQCEAE/s340-p-k-rw-no/photo.jpg",
            userName: "Likki",
            isRestaurantReview: false,
            createdAt: "2020-06-01T12:00:00.000Z",
            reviewText: "This place is a must visit.",
          },
          {
            image :"https://lh3.googleusercontent.com/-Xs3FN7fJOu4/XuNV9t2dOQI/AAAAAAAAAAA/sbqCqrdkncgxkohwReB56-6Hhx5DoM9QQCOQCEAE/s340-p-k-rw-no/photo.jpg",
            userName: "Teja",
            isRestaurantReview: false,
            createdAt: "2020-06-01T12:00:00.000Z",
            reviewText: "This place is a must visit.",
          },
    ]);
 
    const averageCost = 300;

    const cuisines =["Indian", "Asian", "Italian", "Chineese"];

    const ratingChanged= (newRating)=> {
        console.log(newRating);
    }

    const settings ={
        dots:true,
        infinite:false,
        speed :500,
        slidesToShow:3,
        slidesToScroll:3,
        initialSlide:0,
        nextArrow : <NextArrow />,
        prevArrow : <PrevArrow />,
        responsive : [
            {
                breakpoint :1024,
                settings:{
                    slidesToScroll:3,
                    slidesToShow:3,
                    infinite:false,
                    dots:true
                }
            },
            {
                breakpoint :600,
                settings:{
                    slidesToScroll:2,
                    slidesToShow:2,
                }
            },
            {
                breakpoint :480,
                settings:{
                    slidesToScroll:1,
                    slidesToShow:1,
                    dots:false,
                }
            }
        ]
    }

    return (
        <>
            <div className="flex flex-col md:flex-row relative gap-6">
                <div className="w-full md:w-8/12 ">
                    <h2 className="font-semibold text-lg md:text-xl my-4"> 
                    About This Place

                    </h2>
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg font-medium">Menu</h4>
                        <Link to={`/restaurant/${id}/menu`}>
                            <span className="flex items-center gap-1 text-zomato-400">
                                See all menu <IoMdArrowDropright />

                            </span>
                        </Link>
                    </div>
                    <div className="flex flex-wrap gap-3 my-4">
                        <MenuCollection menuTitle="menu" pages="3" image={menuImages} />

                    </div>
                    <h4 className="text-lg font-medium my-4">
                        Cuisines
                    </h4>
                    <div className="flex flex-wrap gap-2 ">
                        {cuisines.map((data)=>(
                            <span className="border border-gray-600 text-gray-900 px-2 py-1 rounded-full ">
                                {data}
                            </span>
                        )) }

                    </div>
                    <div className="my-4">
                        <h4 className="text-lg font-medium">Average Cost </h4>
                        <h6>${averageCost}for one order ( approx.)</h6>
                        <small className="text-gray-500">
                        Exclusive of applicable taxes and service charges, if any
                        </small>

                    </div>
                    <div className="my-4">
                        <h4 className="text-lg font-medium "> Similar Restaurants</h4>
                        <div>
                            <Slider {...settings} >
                                <MenuSimilarRestaurantCard 
                                 image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                                 title="Unplugged Courtyard" />
                                 <MenuSimilarRestaurantCard 
                                 image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                                 title="Unplugged Courtyard" />
                                 <MenuSimilarRestaurantCard 
                                 image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                                 title="Unplugged Courtyard" />
                                 <MenuSimilarRestaurantCard 
                                 image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                                 title="Unplugged Courtyard" />
                                 <MenuSimilarRestaurantCard 
                                 image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                                 title="Unplugged Courtyard" />
                                 <MenuSimilarRestaurantCard 
                                 image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                                 title="Unplugged Courtyard" />

                            </Slider>

                        </div>

                    </div>
                    <div className="my-4 w-full md:hidden flex flex-col gap-4 ">
                         <Mapview title="Pavan's house" phno="+91 9989525957" mapLocation={[17.285499, 82.110628]} address="Yeleswaram, Andhra Pradesh 533429"  />
                    </div>
                    <div className="mb-4 mt-8">
                        <h4 className="text-lg font-medium"> Rate Your Delivery Experience</h4>
                        <ReactStars count={5} 
                            onChange={ratingChanged} 
                            size={24} 
                            activeColor="#ffd700" />
                         
                        {reviews.map((reviewData)=>(
                            <ReviewCard {...reviewData} />
                        ))}

                    </div>
                   
                </div>
                <aside style={{height:"fit-content"}} className="hidden md:flex md:w-4/12 sticky rounded-xl top-2 bg-white p-5 shadow-md flex-col gap-4 ">
                    
                    <Mapview 
                        title="Pavan's house" 
                        phno="+91 9989525957" 
                        mapLocation={[17.285499, 82.110628]} 
                        address="Yeleswaram, Andhra Pradesh 533429" />
                </aside>

            </div>
        
        </>
    );
}

export default Overview
