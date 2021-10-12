const Persons = ({ persons, newFilter, removePerson }) => {
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
          <div key={person.id}>
            <p>
              {person.name} {person.number}
            </p>
            <button type="submit" onClick={() => removePerson(person.id)}>
              delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default Persons;
