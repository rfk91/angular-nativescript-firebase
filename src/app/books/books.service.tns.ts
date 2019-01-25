import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { firestore } from 'nativescript-plugin-firebase';
const firebase = require('nativescript-plugin-firebase/app');
import { BooksServiceAbstract } from './books.service.abstract';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BooksService extends BooksServiceAbstract {
  constructor(private zone: NgZone) {
    super();
  }

  getBooks$(): Observable<Book[]> {
    return Observable.create(subscriber => {
      const collectionRef: firestore.CollectionReference = firebase
        .firestore()
        .collection(`Books`)
        .orderBy(`Title`, `asc`);
      return collectionRef.onSnapshot((snapshot: firestore.QuerySnapshot) => {
        this.zone.run(() => {
          const books = [];
          snapshot.forEach(book => books.push(book.data()));
          subscriber.next(books);
        });
      });
    });
  }
}
