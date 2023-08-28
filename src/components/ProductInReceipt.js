import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromReceipt } from '../actions';

function ProductInReceipt(props) {
   const dispatch = useDispatch();
   const handleRemoveFromReceipt = (productId) => {
      dispatch(removeFromReceipt(productId));
   };

   const handleIncrementQuantity = (productId) => {
      dispatch(incrementQuantity(productId));
   };

   const handleDecrementQuantity = (productId) => {
      dispatch(decrementQuantity(productId));
   };
   return (
      <li key={props.product.id}>
         {props.product.name} Price: {props.product.price}

         <button className="btn" onClick={() => handleIncrementQuantity(props.product.id)}>+</button>
         <span> Count: {props.product.count}</span>
         <button className="btn" onClick={() => handleDecrementQuantity(props.product.id)}>-</button>

         <button className='remove' onClick={() => handleRemoveFromReceipt(props.product.id)}>X</button>
      </li>
   );
};

export default ProductInReceipt;