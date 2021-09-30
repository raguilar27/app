const StaisticLine = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  );
};

const Statistics = ({ good, neutral, bad, data }) => {
  let sum = 0;
  data.forEach((i) => {
    sum += i;
  });

  let average = sum / data.length;
  let positive = (good / data.length) * 100 + " %";

  if (data.length === 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    );
  }

  return (
    <>
      <h1>statistics</h1>
      <StaisticLine text="good" value={good} />
      <StaisticLine text="neutral" value={neutral} />
      <StaisticLine text="bad" value={bad} />
      <StaisticLine text="all" value={data.length} />
      <StaisticLine text="average" value={average} />
      <StaisticLine text="positive" value={positive} />
    </>
  );
};

export default Statistics;
