import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux"

function App() {
  const counter = useSelector((state)=>state.counter)
  const dispatch = useDispatch()

  const increment = () =>{
    dispatch({type:"INC"})
  }
  const decrement = () =>{
    dispatch({type:"DEC"})
  }
  const addTen = () =>{
    dispatch({type:"ADD",payload:10})
  }
  
  return (
    <div className="App">
      <h1>Counter APP</h1>
      <h2>count is - {counter}</h2>
      {/* <h2>Name is - {Name}</h2> */}

      <button onClick={increment}>Increment++</button>
      <button onClick={decrement}>Decrement--</button>
      <button onClick={addTen}>Add 10</button>

    </div>
  );
}

export default App;
