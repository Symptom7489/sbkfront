import React from 'react';

function CarouselLoading(Component) {
    return function CarouselLoadingComponet({ isLoading, ...props}) {
        if (!isLoading) return <Component {...props}/>;
        return (
            <p style={{ fontSize: '25px'}}>
                Waiting for data to Load!....
            </p>
        );

    };
}

export default CarouselLoading;