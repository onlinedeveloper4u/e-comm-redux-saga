import { addToCart, emptyCart, removeFromCart } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { productList } from '../redux/productAction';
import { useEffect } from 'react';

function Main() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.productData)
  console.warn("data in main component from saga", data);

  useEffect(() => {
    dispatch(productList())
  }, [])

  return (
    <div>
      <div>
        <button onClick={() => { dispatch(emptyCart()) }}>Empty Cart</button>
      </div>
      <div className='product-container'>
        {
          data.map((item) =>
            <div key={item.id} className='product-item'>
              <img src={item.photo} alt='' />
              <div>Name: {item.name}</div>
              <div>Color: {item.color}</div>
              <div>Brand: {item.brand}</div>
              <div>Price: {item.price}</div>
              <div>Category: {item.category}</div>
              <div>
                <button onClick={() => { dispatch(addToCart(item)) }}>Add To Cart</button>
                <button onClick={() => { dispatch(removeFromCart(item.id)) }}>Remove To Cart</button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Main;
