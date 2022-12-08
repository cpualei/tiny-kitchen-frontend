import { useState } from 'react';
// import reactLogo from './assets/react.svg';
import { Orders } from './components/Orders';
import './App.css';

function App() {
  const [state, setState] = useState({
    completeOrders: {
      1: {
        id: 1,
        name: "Caitlin",
        address: "24242 Santana, CA",
        items: "acai bowl",
        isComplete: "true",
      },
    },
    incompleteOrders: {
      2: {
        id: 2,
        name: "Kristi",
        address: "45454 Lilac, HI",
        items: "buddah bowl",
        isComplete: "false",
      },
    },
  });

  return (
    <div className="App">
      {Object.keys(state.incompleteOrders).length ?
        <div className="orders" id="incomplete-orders">
          <span className="headers">Incomplete orders:</span>
          <Orders orders={Object.values(state.incompleteOrders)} />
        </div>
        :
        ""
      }
      <br></br>
      <br></br>
      <div className="orders" id="complete-orders">
        <span className="headers">Complete orders:</span>
        <Orders orders={Object.values(state.completeOrders)} />
      </div>
    </div>
  )
}

export default App
