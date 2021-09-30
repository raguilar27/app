const StaisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
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
      <thead>
        <tr>
          <td>No feedback given</td>
        </tr>
      </thead>
    );
  }

  return (
    <tbody>
      <StaisticLine text="good" value={good} />
      <StaisticLine text="neutral" value={neutral} />
      <StaisticLine text="bad" value={bad} />
      <StaisticLine text="all" value={data.length} />
      <StaisticLine text="average" value={average} />
      <StaisticLine text="positive" value={positive} />
    </tbody>
  );
};

export default Statistics;
