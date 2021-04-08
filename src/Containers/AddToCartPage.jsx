// @ts-nocheck
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import "../styles/add-to-cart.scss";
import logo from "../../public/assets/logo.png";
import AddToCartPageSummary from '../Components/AddToCartPageSummary';
import ProductCostTable from '../Components/ProductCostTable';
import Product from '../Components/Product';
import TotalSummary from '../Components/TotalSummary';

const AddToCartPage = ({ dataArr }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        dataArr.length && setData(dataArr)
    }, [])
    const handleDelete = (index) => {
        setData([...data.slice(0, index), ...data.slice(index + 1)])
    }
    const handleNumberOfItemClick = (value, index) => {
        if (value > 0) {
            const newData = data.map((el, i) => {
                if (i === index) {
                    el.numberOfItems = value;
                }
                return el;
            })
            setData(newData);
        }
    }
    return (
        <React.Fragment>
            <header>
                <img tabIndex={0} className="logo" src={logo} alt="AKQA Media India"></img>
            </header>
            <AddToCartPageSummary totalItems={data.length}>
                <ProductCostTable>
                    {data.map((pObj, i) => <Product key={pObj["pid"]} onNumberOfItemClick={handleNumberOfItemClick} rowObj={pObj} index={i} handleDelete={handleDelete} />)}
                    <TotalSummary data={data} />
                </ProductCostTable>
                <div className={"flex-end"}>
                    <button
                        aria-label="Buy now"
                        tabIndex={0}
                        disabled={!data.length}
                        onClick={() => alert(JSON.stringify(data))}
                        className={"button"}>
                            <strong>BUY NOW</strong>
                    </button>
                </div>
            </AddToCartPageSummary>
            <footer tabIndex={0} style={{ textAlign: "right" }}>Copyright @ASHI LTD Registered in England</footer>
        </React.Fragment>
    )
}
AddToCartPage.propTypes = {
    dataArr: PropTypes.array.isRequired
}

export default AddToCartPage;
