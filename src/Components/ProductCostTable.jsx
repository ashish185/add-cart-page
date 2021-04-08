import React from 'react';
import "../styles/add-to-cart.scss";
const ProductCostTable = ({ children }) => {
    return (
        <section tabIndex={0} className={"table-class"}>
            <table>
                <tbody>
                    <tr>
                        <th tabIndex={0} colSpan={2}>Product</th>
                        <th tabIndex={0} colSpan={2}>Total Cost</th>
                    </tr>
                    {children}
                </tbody>
            </table>
        </section>
    );
};
export default ProductCostTable;