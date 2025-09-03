import React from 'react'

const Transaction = ({ transaction }) => {
    return (
        <>
            <li className="minus">
                {transaction.text} <span>-$400</span><button class="delete-btn"></button>
            </li>
        </>
    )
}

export default Transaction;