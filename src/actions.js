export const addToReceipt = (product) => {
   return {
      type: 'ADD_TO_RECEIPT',
      product: product,
   }
};
export const closedReceipt = (receiptId) => {
   return {
      type: 'CLOSE_RECEIPT',
      receipt: receiptId,
   }
};
export const incrementQuantity = (productId) => {
   return {
      type: 'INCREMENT_QUANTITY',
      counter: productId,
   }
};
export const decrementQuantity = (productId) => {
   return {
      type: 'DECREMENT_QUANTITY',
      productId: productId,
   }
};
export const removeFromReceipt = (productId) => {
   return {
      type: 'REMOVE_FROM_RECEIPT',
      productId: productId,
   }
};