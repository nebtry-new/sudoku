const Cell = ({isInitial, number, onChange}) => {
  const onClickHandler = () => {
    if (isInitial) {
      return;
    }
    onChange((number + 1) % 5);
  };

  return (
    <div
      className={`cell ${isInitial ? "initial" : ""}`}
      onClick={onClickHandler}
    >
      {number !== 0 && number}
    </div>
  );
};

export default Cell;
