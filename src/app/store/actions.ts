import { CreditCard } from "../models/credit-card";

export class AddPaymentAction {
    type:string = "addPayment";
    payload:CreditCard;
    constructor(payload:CreditCard){
        this.payload = payload;
    }
}