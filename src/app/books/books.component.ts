import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksService } from './books.service';
import { Book } from './book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books$: Observable<Book[]>;
  constructor(private readonly b: BooksService) {}

  ngOnInit() {
    this.books$ = this.b.getBooks$();
  }
}
