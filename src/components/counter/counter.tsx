import { memo } from 'react';

type CounterProps = {
  count: number;
  onIncBtnClick: () => void;
  onDecBtnClick: () => void;
}

function Counter({count, onIncBtnClick, onDecBtnClick}:CounterProps): JSX.Element {
  console.log('Render Counter');
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
    </div>
  );
}

export default memo(Counter, (prevProps, nextProps)=> {
  return prevProps.count === nextProps.count;
});