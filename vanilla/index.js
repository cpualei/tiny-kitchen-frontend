// React under the hood - vanilla js DOM manipulation

const render = () => {
    const root = document.getElementById("root");
    const App = document.createElement("div");

    const OrderForm = document.createElement("Form");

    const name = document.createElement("input");
    name.placeholder = "Name";
    const address = document.createElement("input");
    address.placeholder = "Address";
    const items = document.createElement("input");
    items.placeholder = "Items";
    const submit = document.createElement("button");
    submit.innerText = "Submit";

    OrderForm.append(name, address, items, submit)
    App.append(OrderForm);
    root.append(App);
};

document.addEventListener("DOMContentLoaded", () => {
    render();
});

