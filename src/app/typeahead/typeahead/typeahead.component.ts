import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { noop, Observable, Observer, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

interface User {
  name:string
}

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.css']
})
export class TypeaheadComponent implements OnInit {
  search: string = '';
  suggestions?: Observable<string[]>;

  search2: string;
  suggestions2: string[] = []

  search3: string;
  suggestions3: Observable<string[]>;
 
  constructor(private http: HttpClient) {}
 
  ngOnInit(): void {
    // this.suggestions = new Observable((observer: Observer<string[]>) => {
    //   this.http.get<string[]>(
    //     '/assets/data.json', {
    //     params: { q: this.search }
    //   }).subscribe(res => {
    //     console.log(res)
    //     res = res.filter(r => r.toLowerCase().includes(this.search.toLowerCase()))
    //     observer.next(res)
    //   })
    // })

    this.suggestions = new Observable((observer: Observer<string[]>) => {
      this.http.get<User[]>(
        'https://jsonplaceholder.typicode.com/users', {
        params: { q: this.search }
      }).subscribe(res => {
        console.log(res)
        let users = res.map(user => user.name)
        console.log(users)
        observer.next(users.filter(user => user.toLowerCase().includes(this.search.toLowerCase())))
      })
    })
  }

  searchChange2(text:string) {
    this.http.get<User[]>(
      'https://jsonplaceholder.typicode.com/users', {
      params: { q: text }
    }).subscribe(res => {
      // console.log(res)
      let users = res.map(user => user.name)
      console.log(users)
      this.suggestions2 = users.filter(user => user.toLowerCase().includes(this.search2.toLowerCase()))
    })
  }

  searchChange3(text:string) {
    this.suggestions3 = new Observable((observer: Observer<string[]>) => {
      this.http.get<User[]>(
        'https://jsonplaceholder.typicode.com/users', {
        params: { q: text }
      }).subscribe(res => {
        // console.log(res)
        let users = res.map(user => user.name)
        console.log(users)
        observer.next(users.filter(user => user.toLowerCase().includes(this.search3.toLowerCase())))
      })
    })
  }
}
