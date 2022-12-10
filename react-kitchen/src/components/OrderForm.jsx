import React, { useState } from "react";
import "./OrderForm.css";
import chefHat from "../../public/imgs/chefHat.jpg";

export const OrderForm = ({ createOrder }) => {

    const [newOrder, setNewOrder] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        createOrder(newOrder);
    }

    return (
        <div className="form-contr">
            <form className="form" onSubmit={handleSubmit}>
                <p id="form-header">Create your order:</p>
                <div className="outer-form">
                    <img id="chef-hat" src={chefHat} alt="chefHat" />
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
                        <p id="verbiage">* Please separate each item with a comma.<br></br>
                        * Include utensils in items list if you require them<br></br>
                            (e.g. fork, spoon, napkins, etc.).
                        </p>
                        <button id="submit-btn" type="submit" value="Submit order">Submit order</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
