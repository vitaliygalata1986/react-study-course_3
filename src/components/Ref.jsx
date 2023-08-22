import { useEffect, useRef, useState } from 'react';

function Ref() {
  const inputEl = useRef(null);
  const numRef = useRef(0);
  const [count, setCount] = useState(0);
  console.log('inputEl', inputEl);
  console.log('numRef', numRef); // {current: 0}

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const handleClickRef = () => {
    numRef.current = 1;
  };

  const onButtonClick = () => {
    // `current` указывает на смонтированный элемент `input`
    inputEl.current.focus();
  };

  useEffect(() => {
    console.log('После монтирования', inputEl);
    console.log(numRef.current);
  });

  return (
    <div>
      <button onClick={handleClick}>{count}</button>

      <input ref={inputEl} type="text" placeholder="name" />
      <button onClick={onButtonClick}>Установить фокус на поле ввода</button>
      <button onClick={handleClickRef}>Увеличить ref {numRef.current}</button>
    </div>
  );
}

export default Ref;
