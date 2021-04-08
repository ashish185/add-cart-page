import React from 'react'
import AddToCartPage from './AddToCartPage'
const dataArr=[
    {
        "pid": "1",
        "nameOfTheProduct": "Speaker",
        "price": 198.99,
        "numberOfItems": 2
    },
    {
        "pid": "2",
        "nameOfTheProduct": "Fridge",
        "price": 198.99,
        "numberOfItems": 2
    }
];
export default function Main() {
    return (
        <div className={'main'}>
           <AddToCartPage dataArr={dataArr}/>
        </div>
    )
}
