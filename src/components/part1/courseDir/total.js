const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {props.course.parts[0].exercise +
          props.course.parts[1].exercise +
          props.course.parts[2].exercise}
      </p>
    </div>
  );
};

export default Total;
