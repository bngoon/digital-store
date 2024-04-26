import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';


function Product() {
  const {all_product } = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id ===productId)
  return (
    <div className=''></div>
  )
}

export default Product