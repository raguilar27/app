const PersonForm = ({
  handleSubmit,
  newName,
  newNumber,
  handleNameChange,
  handleNumberChange,
}) => {
  const handleName = (e) => {
    handleNameChange(e);
  };

  const handleNumber = (e) => {
    handleNumberChange(e);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
