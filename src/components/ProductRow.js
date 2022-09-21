function ProductRow(props) {
  const { product } = props;
  const stockStatus = product.inStock ? null : 'red';
  return (
    <tr>
      <td style={{ color: stockStatus }}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
