import { Component, OnInit } from '@angular/core';
import { filter, from, Observable, Subject } from 'rxjs';
import { map } from 'rxjs';
import { DataService } from './app/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService],
})
export class AppComponent implements OnInit {
  title = 'AngularObservables';

  constructor(private dataService: DataService) {}

  // myObservable = new Observable((observer) => {
  //   console.log('Observable starts');
  //   setTimeout(() => {
  //     observer.next('1');
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next('2');
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next('3');
  //   }, 3000);
  //   setTimeout(() => {
  //     observer.error(new Error('Something went wrong'));
  //   }, 6000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 3000);
  // });

  // array1 = [1, 2, 6, 7, 8];

  // myObservable = from(this.array1).pipe(
  //   map((val) => {
  //     return val * 5;
  //   }),
  //   filter((val) => {
  //     return val >= 30;
  //   })
  // );

  // randomNumObs = new Observable((observer) => {
  //   observer.next(Math.random());
  // });

  // randomNumSubject = new Subject();

  ngOnInit() {
    // let subscription = this.myObservable.subscribe({
    //   next: (val) => console.log(val),
    //   error: (err) => console.error(err.message),
    //   complete: () => console.log('Observable complete'),
    // });

    // setTimeout(() => {
    //   subscription.unsubscribe();
    // }, 5000);

    // this.randomNumSubject.subscribe({
    //   next: (val) => console.log('subscription 1:', val),
    // });

    // this.randomNumSubject.subscribe({
    //   next: (val) => console.log('subscription 2:', val),
    // });

    // this.randomNumSubject.next(Math.random());
  }
}
