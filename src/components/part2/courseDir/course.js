import Header from "./header";
import Content from "./content";
import Total from "./total";

const Course = ({ course }) => {
  return (
    <div>
      <Header header={course.name} />
      <Content content={course.parts} />
      <Total total={course.parts} />
    </div>
  );
};

export default Course;
