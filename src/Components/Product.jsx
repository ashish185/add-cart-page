// @ts-nocheck
import React, { useState } from 'react';
import productImg from '../../public/assets/product-thumbnail.jpg';
import deleteIcon from "../../public/assets/delete-icon.png";
const Product = ({ rowObj: { nameOfTheProduct, numberOfItems, price }, index, handleDelete, onNumberOfItemClick }) => {
    const [val, setVal] = useState(numberOfItems);
    const handleOnChange = (val) => {
        if (val && val > 0) {
            setVal(val)
        }
    }
    return (
        <React.Fragment>
            <tr>
                <td className="img-with-text">
                    <img tabIndex={0} src={productImg} alt={"product image"} />
                </td>
                <td >
                    <div className={"price-name-count"}>
                        <strong tabIndex={0}>{nameOfTheProduct}</strong>
                        <strong tabIndex={0}>{`$ ${price.toFixed(2)}`}</strong>
                        <input type="number" value={val} 
                        aria-label="number of items"
                            onBlur={() => onNumberOfItemClick(val, index)}
                            onChange={(e) => handleOnChange(e.target.value)}
                            tabIndex={0} />
                    </div>
                </td>
                <td tabIndex={0}>
                    $ {(price * numberOfItems).toFixed(2)}
                </td>
                <td style={{ textAlign: "right" }}>
                    <img tabIndex={0} className={"delete-img"} onClick={() => {
                        handleDelete(index)
                    }}
                        src={deleteIcon}
                        alt={"product image"} />
                </td>
            </tr>
        </React.Fragment>
    );
};

export default Product;