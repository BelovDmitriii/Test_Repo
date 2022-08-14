import { memo, useMemo } from 'react';

type CounterProps = {
  count: number;
  onIncBtnClick: () => void;
  onDecBtnClick: () => void;
  text: string;
}

function Counter({count, onIncBtnClick, onDecBtnClick, text}:CounterProps): JSX.Element {
  console.log('Render Counter');
  // const testString = 'Hello, World';

  const getMagicCount = (word: string) => {
    let i = 0;
    while (i < 1000000000) {i++;}
    return i + word.length;
  }

  const magicCount = useMemo(() => getMagicCount(text), [text]);

  return(
    <div className="controls">
      <button
        className="customButton"
        onClick={onIncBtnClick}
        >
        +
      </button>
      <button
        className="customButton buttonDanger"
        onClick={onDecBtnClick}
        >
        -
      </button>
      <br />
      <span>Макс. символов <b>{count}</b></span>
      <p>Магическое число: {magicCount}</p>
    </div>
  );
}

export default memo(Counter);