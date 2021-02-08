import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { StoreInterface } from 'src/app/models/storeInterface';
import { PaymentService } from 'src/app/services/payment.service';
import { AddPaymentAction } from 'src/app/store/actions';
import { dateRangeValidator } from "../../customValidator";

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  
  cardForm: FormGroup;
  get f() { return this.cardForm.controls; }
  submitted = false;
  loading = false;

  constructor(
    private router:Router,
    private FormBuilder:FormBuilder, 
    private payment:PaymentService,
    private store:Store<StoreInterface> 
  ) { }

  ngOnInit(): void {
    this.cardForm = this.FormBuilder.group({
      creditCardNumber: ['', [Validators.required, Validators.pattern('^[ 0-9]*$')]],
      cardHolderName: ['', Validators.required],
      expirationDate: ['', [Validators.required, dateRangeValidator(new Date())]],
      ccv: [''],
      amount: ['', [Validators.required, Validators.min(1),]]
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Now let's also unsubscribe from the subject itself:
    this.destroy$.unsubscribe();
  }
  

  onSubmit(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.cardForm.invalid) {
        return;
    }
    this.loading = true;
    this.payment.SendPayment
    .pipe(takeUntil(this.destroy$))
    .subscribe((data:any)=>{
      this.loading = false;

      this.store.dispatch(new AddPaymentAction(this.cardForm.value))

      setTimeout(() => {
        this.router.navigate(['/log']);
      }, 500);
    },err=>{
      this.loading = false;
    })
  }

}
