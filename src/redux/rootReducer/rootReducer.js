import dataReducer from "../reducers/data";
import numberOfPaymentsReducer from "../reducers/numberOfPaymentsReducer";

const rootReducer = {
  data: dataReducer,
  numberOfPayments: numberOfPaymentsReducer,
};

export default rootReducer;
