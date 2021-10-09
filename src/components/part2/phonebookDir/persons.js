const Persons = ({ persons, newFilter }) => {
  return (
    <div>
      {persons
        .filter((person) => {
          if (!newFilter) return true;
          if (
            person.name.includes(newFilter) ||
            person.number.includes(newFilter)
          )
            return true;
        })
        .map((person) => (
          <p key={person.id}>
            {person.name} {person.number}
          </p>
        ))}
    </div>
  );
};

export default Persons;
