import { createStore } from "redux";
import rootReducer from "./reducers";
import { devToolEnhancer } from "redux-devtools-extension";

const configureStore = () => createStore(rootReducer);

export default configureStore;
