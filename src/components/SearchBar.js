function SearchBar(props) {
  const { setSearchQuery, setCheckbox, checkbox, products } = props;
  return (
    // <div>
    //   <h1>Search Bar</h1>
    //   <input
    //     style={{ padding: '10px', marginBottom: '20px' }}
    //     type="text"
    //     onChange={(event) => {
    //       event.preventDefault();
    //       setSearchQuery(event.target.value);
    //     }}
    //   />
    // </div>

    <div>
      <h1>Category Filter</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <input
                style={{ padding: '10px', marginBottom: '20px' }}
                type="checkbox"
                name={product.name}
                id={product.name}
                onChange={(event) => {
                  const { checked } = event.target;
                  let newCheckbox = [...checkbox];

                  checked
                    ? newCheckbox.push(product.name)
                    : newCheckbox.splice(newCheckbox.indexOf(product.name), 1);

                  setCheckbox(newCheckbox);
                }}
              />

              <label htmlFor={product.name}>{product.name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchBar;
