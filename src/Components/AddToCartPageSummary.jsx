import React from 'react';
import "../styles/add-to-cart.scss";
const AddToCartPageSummary = ({ children, totalItems }) => {
    return (
        <main tabIndex={0} className={'flex-container'}>
            <h3 tabIndex={0}>You have {totalItems} item(s) in the cart</h3>
            {children}
        </main>
    );
};
export default AddToCartPageSummary;