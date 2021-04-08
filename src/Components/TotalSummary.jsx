import React, { useState, useEffect } from 'react';
const TotalSummary = ({ data }) => {
    const [total, setTotal] = useState(0);
    useEffect(() => {
        let sum = 0;
        data.forEach(element => {
            sum = sum + element.price * element.numberOfItems;
        });
        setTotal(sum)
    }, [data])
    const Td = ({ val1, val2 }) => {
        return (
            <tr>
                <td tabIndex={0} style={{ textAlign: "right" }} colSpan={2}>{val1}</td>
                <td tabIndex={0} colSpan={2}>$ {val2}</td>
            </tr>
        );
    };
    return (
        <React.Fragment>
            <Td val1={'SubTotal'} val2={total.toFixed(2)}></Td>
            <Td val1={'Vat @20%'} val2={(total * 0.2).toFixed(2)}></Td>
            <tr className={"border-bottom-style"}>
                <td style={{ textAlign: "right" }} colSpan={2}>
                    <strong tabIndex={0}>Total Cost</strong>
                </td>
                <td tabIndex={0} colSpan={2}>$ {(total + total * 0.2).toFixed(2)}</td>
            </tr>
        </React.Fragment>
    );
};

export default TotalSummary;