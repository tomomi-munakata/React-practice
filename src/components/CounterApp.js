import react, { useState } from 'react';
import '../css/CounterApp.css';

const Counter = (props) => {
    // props.color = "red";

    const [count,setCount] = useState(0);
    
    const countUP = () => {
        setCount(count + 1);
    }
    return (
        <div style={{backgroundColor:props.color}} onClick={countUP}>
         {count} 
        </div>
    );
}

const CounterApp = (props) => {
    return (
        <div className="container">
          <ul>
          <li><Counter color={props.color} /></li>
         </ul>
        </div>
    );
}




export default CounterApp;