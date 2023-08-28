import { useSelector } from "react-redux";
import { createStore } from "redux";

const initialState = {
   products: [
      { id: 1, name: 'Хінкалі', price: 38 },
      { id: 2, name: 'Хачапурі по-аджарські', price: 250 },
      { id: 3, name: 'Чебурек з сиром сулугуні', price: 144 },
      { id: 4, name: 'Домашній суп', price: 140 },
      { id: 5, name: 'Шашлик з телятини', price: 309 },
   ],
   receipt: [],
   closedReceipts: [],
};

const receiptReducer = (state = initialState, action) => {
   console.log(action.receipt)
   switch (action.type) {
      case 'ADD_TO_RECEIPT':
         return {
            ...state,
            receipt: [...state.receipt, { ...action.product, count: 1 }]
         };
      case 'CLOSE_RECEIPT':
         const updatedReceipts = state.closedReceipts.map(receipt => {
            if (receipt.id === action.receipt) {
               return { ...receipt, status: 'closed' };
            }
            return receipt;
         });
         return {
            ...state,
            receipt: updatedReceipts
         };

      case 'INCREMENT_QUANTITY':
         return {
            ...state,
            receipt: state.receipt.map(item => {
               console.log(item)
               if (item.id === action.counter) {
                  return { ...item, count: ++item.count }
               }
               return item;
            })
         };
      case 'DECREMENT_QUANTITY':
         return {
            ...state,
            receipt: state.receipt.map(item => {
               if (item.id === action.productId && item.count > 0) {
                  return { ...item, count: --item.count }
               }
               return item;
            })
         };
      case 'REMOVE_FROM_RECEIPT':
         return {
            ...state,
            receipt: state.receipt.filter(item => item.id !== action.productId)
         };
      default:
         return state;
   }
};

export default receiptReducer;