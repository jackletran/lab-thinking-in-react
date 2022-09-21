import ProductRow from './ProductRow';

function ProductTable(props) {
  const { data, searchQuery, checkbox } = props;
  // const filteredData = data.filter((product) =>
  //   product.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const filteredData = data.filter((product) => {
    return checkbox.length === 0 ? true : checkbox.indexOf(product.name) !== -1;
  });

  return (
    <table
      style={{
        width: '100%',
        borderSpacing: 0,
      }}
    >
      <thead style={{ backgroundColor: 'lightgrey' }}>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((product) => {
          return <ProductRow product={product} key={product.id} />;
        })}
      </tbody>
    </table>
  );
}

export default ProductTable;
