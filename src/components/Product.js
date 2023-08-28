import { useDispatch, useSelector } from "react-redux";
import { addToReceipt } from "../actions";

function Product(props, state) {
   const dispatch = useDispatch();
   const receipt = useSelector(state => state.receipt);

   const handleAddToReceipt = (product) => {
      const isProductInReceipt = receipt.some(item => item.id === product.id);
      if (!isProductInReceipt) {
         dispatch(addToReceipt(product));
      };
   };
   return (
      <li key={props.product.id}
         className="item"
         onClick={() => {
            handleAddToReceipt(props.product)
         }}>{props.product.name} {props.product.price}</li>
   );
}

export default Product;