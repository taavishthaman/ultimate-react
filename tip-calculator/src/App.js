import {useState} from 'react';

export default function App() {
  const [bill, setBill] = useState(null);
  function onChangeBillHandler(value) {
    setBill(value);
  }

  const [yourReview, setYourReview] = useState(0);
  const [friendReview, setFriendReview] = useState(0);

  return (
    <div>
      <Bill onChangeBill={onChangeBillHandler} bill={bill}/>
      <YourReview onChangeYourReview={setYourReview} yourReview={yourReview}/>
      <FriendReview onChangeFriendReview={setFriendReview} friendReview={friendReview}/>
      <TotalBill bill={bill} yourReview={yourReview} friendReview={friendReview}/>
      <Reset onChangeBill={onChangeBillHandler} onChangeYourReview={setYourReview} onChangeFriendReview={setFriendReview}></Reset>
    </div>
  );
};

function Bill({onChangeBill, bill}) {

  return (<div>
    <div className="question">How much was the bill?</div>
    <input onChange={(e) => onChangeBill(Number(e.target.value))} value={bill}></input>
  </div>)
}

function YourReview({yourReview, onChangeYourReview}) {
  return <div>
    <div className="question">How did you like the service?</div>
    <select onChange={(e) => onChangeYourReview(Number(e.target.value))} value={yourReview}>
      <option value={0}>Dissatisfied (0%)</option>
      <option value={1}>It was okay (5%)</option>
      <option value={2}>It was good (10%)</option>
      <option value={3}>Absolutely amazing! (20%)</option>
    </select>
  </div>
}

function FriendReview({friendReview, onChangeFriendReview}) {

  return <div>
    <div className="question">How did your friend like the service?</div>
    <select onChange={(e) => onChangeFriendReview(Number(e.target.value))} value={friendReview}>
      <option value={0}>Dissatisfied (0%)</option>
      <option value={1}>It was okay (5%)</option>
      <option value={2}>It was good (10%)</option>
      <option value={3}>Absolutely amazing! (20%)</option>
    </select>
  </div>
}

function TotalBill({bill, yourReview, friendReview}) {
  let yourTip;
  let friendTip;

  if(yourReview === 0) {
    yourTip = 0;
  } else if(yourReview === 1) {
    yourTip = .05 * bill;
  } else if(yourReview === 2) {
    yourTip = .1 * bill;
  } else if(yourReview === 3) {
    yourTip = .20 * bill;
  }

  if(friendReview === 0) {
    friendTip = 0;
  } else if(friendReview === 1) {
    friendTip = .05 * bill;
  } else if(friendReview === 2) {
    friendTip = .1 * bill;
  } else if(friendReview === 3) {
    friendTip = .20 * bill;
  }

  return <h3>You pay ${bill + yourTip + friendTip} (${bill} + ${yourTip + friendTip})</h3>
}

function Reset({onChangeBill, onChangeFriendReview, onChangeYourReview}) {
  function reset() {
    onChangeBill(0);
    onChangeFriendReview(0);
    onChangeYourReview(0);
  }
  return <button onClick={reset}>Reset</button>
}
