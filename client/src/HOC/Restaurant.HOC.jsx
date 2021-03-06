import React from 'react';
import { Route } from 'react-router-dom';

//layout
import RestaurantLayout from '../Layout/Restaurant.layout';

function RestaurantHOC({component : Component , ...rest}) {
    return (
        <>
            <Route {...rest} component={(props)=>(
                <RestaurantLayout>
                    <Component {...props} />
                </RestaurantLayout>
            )}
            />

        </>
    );
}

export default RestaurantHOC;
