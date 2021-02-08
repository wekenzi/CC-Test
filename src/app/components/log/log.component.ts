import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CreditCard } from 'src/app/models/credit-card';
import { StoreInterface } from 'src/app/models/storeInterface';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  logs:CreditCard[]=[]; 
  constructor(private store:Store<StoreInterface>) {}

  ngOnInit(): void {

    this.store.pipe(takeUntil(this.destroy$))
    .subscribe(data=>{
      this.logs = data.payment.logs;
    })

  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Now let's also unsubscribe from the subject itself:
    this.destroy$.unsubscribe();
  }
  

}
