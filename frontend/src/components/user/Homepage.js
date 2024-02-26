import React from 'react';
import Category from './Category';
import ListProduct from './ListProduct';


function Homepage() {
    return (
        <div className="main">
            <div className="grid wide">
                <div className='row'>
                    <Category />
                    <ListProduct />
                </div>
            </div>
        </div>
    );
}

export default Homepage;