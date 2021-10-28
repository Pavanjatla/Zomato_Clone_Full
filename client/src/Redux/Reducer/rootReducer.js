import { combineReducers  } from "redux";

import restaurant from "./restaurant/restaurant.reducer";
import Image from "./Image/Image.reducer";
import review from "./reviews/reviews.reducer";
import user from "./User/user.reducer";
import food from "./Food/food.reducer";
import auth from "./Auth/auth.reducer";


const rootReducer = combineReducers({
    restaurant,
    Image,
    review,
    user,
    food,
    auth,
});

export default rootReducer;