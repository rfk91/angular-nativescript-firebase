import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private readonly afs: AngularFirestore) {}

  getBooks$(): Observable<Book[]> {
    return this.afs.collection<Book>(`Books`).valueChanges();
  }
}
