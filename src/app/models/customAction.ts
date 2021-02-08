import { CreditCard } from "./credit-card";

export interface CustomAction {
    type:string;
    payload:CreditCard;
}
