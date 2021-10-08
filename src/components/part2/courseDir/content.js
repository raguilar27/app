import Part from "./part";

const Content = ({ content }) => {
  return (
    <>
      {content.map((part) => (
        <Part key={part.id} part={part.name} exercises={part.exercises} />
      ))}
    </>
  );
};

export default Content;
