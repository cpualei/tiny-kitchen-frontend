import { useState } from 'react';
// import reactLogo from './assets/react.svg';
import { Orders } from './components/Orders';
import { OrderForm } from './components/OrderForm';
import './App.css';

function App() {

  const allOrders = {
    completeOrders: {
      1: {
        id: 1,
        name: "Caitlin",
        address: "24242 Santana, CA",
        items: "acai bowl",
        isComplete: true,
      },
    },
    incompleteOrders: {
      1: {
        id: 2,
        name: "Kristi",
        address: "45454 Lilac, HI",
        items: "buddah bowl",
        isComplete: false,
      },
    },
  }

  const [state, setState] = useState(allOrders);

  const createOrder = (order) => {
    const orderNum = Object.keys(state.incompleteOrders).length + 1;
    order.id = Object.values(state).length + 1;
    setState({...state.incompleteOrders, [orderNum]: order});
    // console.log({...state.incompleteOrders, [orderNum]: order})
  }

  console.log(Object.values(state.incompleteOrders))

  return (
    <div className="App">
      <div>
        <h1 className='h1'>Tiny Kitchen</h1>
        <div>
          <OrderForm createOrder={createOrder} />
        </div>
        <div id="orders-contr">
          {Object.values(state.incompleteOrders).length ?
            <div className="orders" id="incomplete-orders">
              <span className="headers">Incomplete orders:</span>
              <Orders orders={Object.values(state.incompleteOrders)} />
            </div>
             :
            ""
          }
          <div className="orders" id="complete-orders">
            <span className="headers">Complete orders:</span>
            <Orders orders={Object.values(state.completeOrders)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
