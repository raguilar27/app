const Filter = ({ newFilter, handleFilterName }) => {
  const filterName = (event) => {
    handleFilterName(event);
  };

  return (
    <div>
      filter shown with
      <input value={newFilter} onChange={filterName} />
    </div>
  );
};

export default Filter;
