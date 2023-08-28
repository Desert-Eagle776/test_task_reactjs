import { useSelector } from "react-redux";

function TotamAmount() {
   const receipt = useSelector(state => state.receipt);
   const totalAmount = receipt.reduce((total, product) => total + product.price * product.count, 0);

   return (
      <div>
         Сумма: {totalAmount} грн.
      </div>
   );
}

export default TotamAmount;