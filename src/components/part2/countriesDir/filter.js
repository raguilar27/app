const Filter = ({ filter, handleFilter }) => {
  const enableFilter = (e) => {
    handleFilter(e);
  };

  return (
    <div>
      find countries
      <input value={filter} onChange={enableFilter} />
    </div>
  );
};

export default Filter;
