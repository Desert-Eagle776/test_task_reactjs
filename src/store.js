import { createStore } from "redux";
import receiptReducer from "./reducers";

const store = createStore(receiptReducer);

export default store;