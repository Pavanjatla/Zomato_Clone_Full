import React, {useState} from 'react';
import ReviewCard from '../Components/Restaurant/ReviewCard';
import AddReviewCard from '../Components/Restaurant/Reviews/AddReviewCard';


function Reviews() {

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

    return (
        <>
            <div className="w-full flex flex-col md:flex-row relative gap-6">
                <div className="w-full md:w-8/12 flex flex-col gap-3">
                    <div className="md:hidden">
                        <AddReviewCard />

                    </div>
                    {reviews.map((review) =>(
                        <ReviewCard {...review} />
                    ))}

                </div>
                <aside style={{height:"fit-content"}} className="hidden md:flex items-start md:w-4/12 sticky rounded-xl top-2 bg-white p-3 shadow-md flex-col gap-3" >
                    <AddReviewCard />

                </aside>

            </div>
            
        </>
    );
}

export default Reviews
