function Counter() {
  return(
    <div className="controls">
      <button className="customButton">
        +
      </button>
      <button className="customButton buttonDanger">
        -
      </button>
      <br />
      <span>Макс. символов <b>0</b></span>
    </div>
  );
}

export default Counter;