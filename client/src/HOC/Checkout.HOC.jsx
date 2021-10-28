import React from 'react';
import CheckoutLayout from '../Layout/Checkout.layout';
import {Route} from "react-router-dom";

function CheckoutLayoutHOC({component : Component , ...rest}) {
    return (
        <div>
            <Route {...rest} component={(props) =>(
                <CheckoutLayout>
                    <Component {...props} />
                </CheckoutLayout>
            )} />
        </div>
    )
}

export default CheckoutLayoutHOC;
