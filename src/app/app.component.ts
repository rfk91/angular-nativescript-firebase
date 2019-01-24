import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksService } from './books/books.service';
import { Book } from './books/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  books$: Observable<Book[]>;
  constructor(private readonly b: BooksService) {}

  ngOnInit() {
    this.books$ = this.b.getBooks$();
  }
}
