// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
import {useState, useEffect} from 'react';

function App() {
  const [srcCurrency, setSrcCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('USD');
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(0);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    
    async function convertCurrency() {
      try {
        setIsLoading(true);
        const url = `https://api.frankfurter.app/latest?amount=${value}&from=${srcCurrency}&to=${targetCurrency}`;
        const res = await fetch(url);
        if(!res.ok) {
          throw new Error('Some error occured while converting');
        }
        const data = await res.json();
        setResult(data.rates[targetCurrency]);
      } catch (e) {
        setError(e.message);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    }
    setError('');
    convertCurrency();

  }, [srcCurrency, targetCurrency, value])

  return (
    <div>
      <input type="text" onChange={e => setValue(e.target.value)}/>
      <select onChange={e => setSrcCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onChange={e => setTargetCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {isLoading && 'Loading...'}
        {!isLoading && !error && result}
        {!isLoading && error && error}
      </p>
    </div>
  );
}

export default App;
