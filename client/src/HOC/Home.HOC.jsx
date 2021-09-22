import React from 'react';
import { Route } from 'react-router-dom';

//layout
import Homelayout from '../Layout/Home.layout';

function HomeLayoutHOC({component : Component , ...rest}) {
    return (
        <>
            <Route {...rest} component={(props)=>(
                <Homelayout>
                    <Component {...props} />
                </Homelayout>
            )}
            />

        </>
    );
}

export default HomeLayoutHOC;
