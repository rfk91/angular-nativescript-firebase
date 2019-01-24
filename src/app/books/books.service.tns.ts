import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { firestore } from 'nativescript-plugin-firebase';
const firebase = require('nativescript-plugin-firebase/app');
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private zone: NgZone) {}

  getBooks$(): Observable<Book[]> {
    return Observable.create(subscriber => {
      const collectionRef: firestore.CollectionReference = firebase
        .firestore()
        .collection(`Books`);
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
