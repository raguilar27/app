const Total = ({ total }) => {
  const amount = total.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);

  return (
    <>
      <h6>total of {amount} exercises</h6>
    </>
  );
};

export default Total;
