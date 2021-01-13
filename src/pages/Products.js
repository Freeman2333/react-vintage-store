import React, {useContext} from 'react'
import { ProductContext } from './../context/products';
import ProductList from './../components/Products/ProductList';
import Loading from './../components/Loading';

const Products = () => {
  const { products, loading } = useContext(ProductContext)
  if (loading) {
    return <Loading/>
  }
  return (
    <ProductList title='our products' products={products}/>
  )
}

export default Products
