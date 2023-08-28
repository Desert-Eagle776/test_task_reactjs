import { useSelector } from "react-redux";
import ProductInReceipt from "../components/ProductInReceipt";

function Receipt() {
   const productsInReceipt = useSelector(state => state.receipt);
   return (
      <div className="receipt">
         <ul>
            {productsInReceipt.map((product, index) => {
               return <ProductInReceipt product={product} />
            })}
         </ul>
      </div>
   );
};

export default Receipt;