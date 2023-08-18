import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './StarRating';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return <div>
    <StarRating color="blue" maxRating={10} onSetRating={setMovieRating}/>
    <p>This movie was rated {movieRating} stars.</p>
  </div>
}

root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} messages={['Terrible', 'Bad', 'Ok', 'Good', 'Amazing']}/>
    <StarRating size={24} color="red" className='test' defaultRating={3}/>
    <Test/> */}
  </React.StrictMode>
);