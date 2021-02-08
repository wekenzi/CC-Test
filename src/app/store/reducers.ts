import { CustomAction } from "../models/customAction";
import { initState } from "./store";

const ADDPAYMENT = "addPayment";

export function PaymentReducer(state = initState, action:CustomAction){
    switch (action.type) {
        case ADDPAYMENT:
            return{
                logs:[...state.logs, action.payload]
            }
        default:
            return state;
    }
}

export const reducers = {payment:PaymentReducer}