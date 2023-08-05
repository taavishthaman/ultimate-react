import './index.css'
import {useState} from 'react';

function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date(Date.now()).toDateString());

  const decStep = () => {
    setStep(s => s-1);
    setDate((d) => {
      return new Date(Date.now() + step * count * 24 * 60 * 60 * 1000).toDateString();
    })
  }

  const incStep = () => {
    setStep(s => s+1);
    setDate((d) => {
      return new Date(Date.now() + step * count * 24 * 60 * 60 * 1000).toDateString();
    })
  }

  const decCount = () => {
    setCount(c => c-1);
    setDate((d) => {
      return new Date(Date.now() + count * step * 24 * 60 * 60 * 1000).toDateString();
    })
  }

  const incCount = () => {
    setCount(c => c+1);
    setDate((d) => {
      return new Date(Date.now() + count * step * 24 * 60 * 60 * 1000).toDateString();
    })
  }


  return (

    <div className='center-div'>
      <div>
        <button className='btn' onClick={decStep}>-</button>
        <p className='text'>Step: {step}</p>
        <button className='btn' onClick={incStep}>+</button>
      </div>
      <div>
        <button className='btn' onClick={decCount}>-</button>
        <p className='text'>Count: {count * step}</p>
        <button className='btn' onClick={incCount}>+</button>
      </div>
      <DateText days={count * step} date={date}></DateText>
    </div>
  );
}

function DateText({days, date}) {
  return <div className='dateText'>
    <p>{days !== 0 ? `${Math.abs(days)} ${days > 0 ? ' days from today ' : ' days ago '} ` : 'Today '}is {date}</p>
  </div>
}

export default App;
