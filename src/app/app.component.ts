import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AngularObservables';

  myObservable = new Observable((observer) => {
    console.log('Observable starts');
    setTimeout(() => {
      observer.next('1');
    }, 1000);
    setTimeout(() => {
      observer.next('2');
    }, 2000);
    setTimeout(() => {
      observer.next('3');
    }, 3000);
    setTimeout(() => {
      observer.error(new Error('Something went wrong'));
    }, 3000);
    setTimeout(() => {
      observer.next('4');
    }, 4000);
    setTimeout(() => {
      observer.next('5');
    }, 5000);
    setTimeout(() => {
      observer.complete();
    }, 3000);
  });

  ngOnInit() {
    this.myObservable.subscribe({
      next: (val) => console.log(val),
      error: (err) => console.error(err.message),
      complete: () => console.log('Observable complete'),
    });
  }
}
