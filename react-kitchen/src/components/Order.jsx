import React, { useState } from "react";
import "./Order.css";

export const Order = ({ order }) => {
    const [completed, setCompleted] = useState(order.isComplete);

    const toggleComplete = () => {
        if (order.isComplete === true) {
            setCompleted(false)
        } else {
            setCompleted(true)
        }
        console.log(order.isComplete)

    }

    return (
        <li className="order">
            <div id="order-info-container">
                <div className="order-info">
                    <span>{order.name}</span>
                    <span>{order.address}</span>
                    <span>{order.items}</span>
                </div>
                <div>
                    <button onClick={() => toggleComplete()}>{order.isComplete ? "Complete" : "Incomplete"}</button>
                </div>
            </div>
        </li>
    )
};
