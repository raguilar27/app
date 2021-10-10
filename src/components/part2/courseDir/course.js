import Header from "./header";
import Content from "./content";
import Total from "./total";

const Course = ({ header, parts }) => {
  return (
    <div>
      <Header header={header} />
      <Content content={parts} />
      <Total total={parts} />
    </div>
  );
};

export default Course;
