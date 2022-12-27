import React, { useState } from "react";
import "./OrderForm.css";
import chefHat from "../../public/imgs/chefHat.jpg";

export const OrderForm = ({ createOrder }) => {

    // const newOrder = {
    //     id: null,
    //     name: "asdf",
    //     address: "asdf",
    //     items: "asdf",
    //     isComplete: "false",
    // }

    // const [order, setOrder] = useState();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [items, setItems] = useState("");


    // const handleChange = (e) => {
    //     setOrder({value: e.target.value})
    // }

    const handleSubmit = (e) => {
        e.preventDefault();

        const order = {
            id: null,
            name: name,
            address: address,
            items: items,
            isComplete: false
        }

        createOrder(order);
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
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                // onChange={handleChange}
                            />
                        </label>
                        <br></br>
                        <label className="labels">
                            Address:&nbsp;
                            <input
                                className="inputs"
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                // onChange={handleChange}
                            />
                        </label>
                        <br></br>
                        <label className="labels">
                            Items:&nbsp;
                            <input
                                className="inputs"
                                type="text"
                                value={items}
                                onChange={(e) => setItems(e.target.value)}
                                // onChange={handleChange}
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
