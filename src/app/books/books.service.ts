import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { BooksServiceAbstract } from './books.service.abstract';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BooksService extends BooksServiceAbstract {
  constructor(private readonly afs: AngularFirestore) {
    super();
  }

  getBooks$(): Observable<Book[]> {
    return this.afs
      .collection<Book>(`Books`, ref => ref.orderBy(`Title`, `asc`))
      .valueChanges();
  }
}
