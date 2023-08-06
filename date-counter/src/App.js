import './index.css'
import {useState} from 'react';

function App() {

  return (
    <div className='center-div'>
      <Counter/>
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  // function decreaseStep() {
  //   setStep(s => s-1);
  // }

  // function increaseStep() {
  //   setStep(s => s+1);
  // }

  function decreaseCount() {
    setCount(c => c-step);
  }

  function increaseCount() {
    setCount(c => c+step);
  }

  function changeStep(s) {
    setStep(s);
  }

  function setCountValue(c) {
    setCount(c);
  }

  return <>
    <div>
      <input type='range' min={0} max={10} value={step} onChange={(e) => changeStep(Number(e.target.value))}></input>
      <span>{step}</span>
    </div>
    <div>
      <button className='btn' onClick={decreaseCount}>-</button>
      {/* <p className='text'>Count : {count}</p> */}
      <input value={count} type="text" onChange={e => setCountValue(Number(e.target.value))}></input>
      <button className='btn' onClick={increaseCount}>+</button>
    </div>
    <div className='date-text'>
      {/* 6 days ago, 8 days from today */}
      <p>{count !== 0 ? Math.abs(count) : 'Today'} {count !== 0 ? 'days' : ''} {count < 0 ? 'ago was' : 'from now is'} {new Date(new Date(date).setDate(new Date(date).getDate() + count)).toDateString()}</p>
    </div>
  </>
}

export default App;
