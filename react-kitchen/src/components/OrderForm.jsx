import React, { useState } from "react";
import "./OrderForm.css"

export const OrderForm = ({ createOrder }) => {

    const [newOrder, setNewOrder] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        createOrder(newOrder);
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <p id="form-header">Create your order:</p>
                    <div className="inner-form">
                        <label className="labels">
                            Name:&nbsp;
                            <input
                                className="inputs"
                                type="text"
                            // value={}
                            />
                        </label>
                        <br></br>
                        <label className="labels">
                            Address:&nbsp;
                            <input
                                className="inputs"
                                type="text"
                            />
                        </label>
                        <br></br>
                        <label className="labels">
                            Items:&nbsp;
                            <input
                                className="inputs"
                                type="text"
                            />
                        </label>
                    </div>
            </form>
        </>
    )
}
