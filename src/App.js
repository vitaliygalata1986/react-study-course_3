import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = (params) => {
    params === 'plus' ? setCount(count + 1) : setCount(count - 1);
  };

  return (
    <div className="App">
      <button onClick={() => handleClick('minus')}>-</button>
      {count}
      <button onClick={() => handleClick('plus')}>+</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;
