import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { Book } from '../../../model/book';
import { map, catchError } from 'rxjs/operators';
import { LoggingService } from '../../logger/logging.service';


@Injectable({
  providedIn: 'root'
})
export class SortTableService {

  url = 'http://localhost:3000/bookLists';

  constructor(private http: HttpClient, private logger: LoggingService) { }
/*########################################################################################### */
public getData(){
  return this.http.get<Book[]>(`${this.url}`);
}

/*########################################################################################### */
public getDataSort():Observable<Book[]>{
    return this.http.get(this.url).pipe(
      map((data: any) => {
        return data.sort((a, b) => {
          this.logger.info('Сортировка по названию успешна')
          return a.title.localeCompare(b.title)
        });
      }),
      catchError(err => {
        return throwError(err);
      })
    )
  };

/*########################################################################################### */
public getGenreSort():Observable<Book[]>{
  return this.http.get(this.url).pipe(
    map((data: any) => {
      return data.sort((a, b) => {
        this.logger.info('Сортировка по жанру выполнена')
        return a.genre.length > b.genre.length ?  1 : -1;
      });
    }),
    catchError(err => {
      return throwError(err);
    })
  )
 };

 /*########################################################################################### */
 public getLangSort():Observable<Book[]>{
  return this.http.get(this.url).pipe(
    map((data: any) => {
      return data.sort((a,b) => {
        this.logger.info('Сортировка по языку книги, выполнена');
        return a.language.length > b.language.length ?  1 : -1;
      });
    }),
    catchError(err => {
      return throwError(err);
    })
  )
 };

 /*########################################################################################### */
 public getAutorSort():Observable<Book[]>{
  return this.http.get(this.url).pipe(
    map((data: any) => {
      return data.sort((a, b) => {
        this.logger.info('Сортировка по автору, выполнена');
        return a.autor.length < b.autor.length ?  1 : -1;
        
      });
    }),
    catchError(err => {
      return throwError(err);
    })
  )
 };
 
}



