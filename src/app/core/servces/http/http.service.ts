import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../../model/book';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = 'http://localhost:3000/bookLists/';

  constructor(private http: HttpClient) { }

/*######################GetBook################################# */
  public getData():Observable<Book[]>{
    return this.http.get<Book[]>(`${this.url}`);
  }

/*######################AddBook################################# */
  public postData(book: Book) {
    return this.http.post(`${this.url}`, book);
  }

/*######################DeleteBook################################# */
  public delete(id: number):Observable<Book[]> {
    return this.http.delete<Book[]>(`${this.url}` + id);

  }

}
