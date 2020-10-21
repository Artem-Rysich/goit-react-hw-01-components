import React from 'react';
import transaction from './../../Data/transaction.json';
import style from './transactionHistory.module.css';
const transactionHistory = () => {
    return ( <
        table className = { style.tabel } >
        <
        thead >
        <
        tr >
        <
        th > Type < /th> <th> Amount </th > < th > Currency < /th> <
        /tr> <
        /thead> <
        tbody > {
            transaction.map(item => {
                return ( <
                    tr key = { item.id } >
                    <
                    td > { item.type } < /td> <td> {item.amount} </td >
                    <
                    td > { item.currency } < /td> <
                    /tr>
                );
            })
        } <
        /tbody> <
        /table>
    );
};

export default transactionHistory;