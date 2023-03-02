import React, { useState } from 'react';
import './App.css';
import productData from './products.json';
import ProductCard from './components/ProductCard';
import SearchInput from './components/SearchInput';
import AddProductForm from './components/AddProduct';

function App() {
  const [products, setProducts] = useState(productData);
  const [searchProduct, setSearchProduct] = useState('');

  const handle_ProductDelete_App = (todelete) => {
    const clean_product = [...products].filter(elem => elem._id !== todelete)
    setProducts(clean_product)
  }

  const handleAddProduct = (newProduct) => {
    const product_new = {...newProduct, _id: products.length + 1}
    setProducts([...products, product_new])
  }


  const handleSearchProduct = (product_value) => {
    console.log('daddy',product_value)
    setSearchProduct(product_value)
  }

  return (
    <>
      <h1>My shopping cart</h1>
      <div className="cart">
      <div>
        <SearchInput handleSearch={handleSearchProduct}/>
      </div>
      <AddProductForm handleNewProduct={handleAddProduct}/>
        {products.filter(elem => elem.name.toLowerCase().includes(searchProduct.toLocaleLowerCase())).map(elem => {
          return <ProductCard key={elem._id} product={elem} handleDelete={handle_ProductDelete_App}/>
        })}

      </div>
    </>
  );
}

export default App;
