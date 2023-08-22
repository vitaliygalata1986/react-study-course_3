import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setСount] = useState(0);
  let timerId;

  const startTimer = () => {
    timerId = setInterval(() => {
      setСount((prevCount) => prevCount + 1);
    }, 1000);
  };

  const resetTimer = () => {
    clearInterval(timerId);
    setСount(0);
  };

  const stopTimer = () => {
    clearInterval(timerId);
    localStorage.setItem('timer', count);
  };

  useEffect(() => {
    localStorage.setItem('timer', count);

    const userCount = localStorage.getItem('timer');
    console.log(userCount);
    if (userCount) {
      setСount(+userCount);
    }
  }, [count]);

  return (
    <div className="App">
      <button onClick={startTimer}>Start</button>
      <button className="btn" onClick={stopTimer}>
        Stop
      </button>
      {count}
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default App;
