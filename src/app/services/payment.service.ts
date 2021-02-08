import { Injectable } from '@angular/core';
import { from, Observable, of, timer } from 'rxjs';
import { debounce, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }

  SendPayment:Observable<any> = of('Request Complete!').pipe(delay(1500));

}
