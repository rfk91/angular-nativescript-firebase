import { Observable } from 'rxjs';
import { Book } from './book';

export abstract class BooksServiceAbstract {
  abstract getBooks$(): Observable<Book[]>;
}
