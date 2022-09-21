import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import { useState } from 'react';
import jsonData from './../data.json';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchQuery, setSearchQuery] = useState('');
  const [checkbox, setCheckbox] = useState([]);

  return (
    <div>
      <SearchBar
        products={products}
        setSearchQuery={setSearchQuery}
        setCheckbox={setCheckbox}
        checkbox={checkbox}
      />
      <ProductTable
        checkbox={checkbox}
        searchQuery={searchQuery}
        data={products}
      />
    </div>
  );
}

export default ProductsPage;
