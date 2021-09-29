import Part from "./part";

const Content = (props) => {
  console.log(props);

  return (
    <div>
      <Part
        part={props.course.parts[0].name}
        exercises={props.course.parts[0].exercise}
      />
      <Part
        part={props.course.parts[1].name}
        exercises={props.course.parts[1].exercise}
      />
      <Part
        part={props.course.parts[2].name}
        exercises={props.course.parts[2].exercise}
      />
    </div>
  );
};

export default Content;
