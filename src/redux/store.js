import { createStore } from "redux";
import { budgetTrackerReducer } from "./reducer";

const store = createStore(budgetTrackerReducer);

export default store;
