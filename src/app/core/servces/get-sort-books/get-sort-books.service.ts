import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { LoggingService } from '../../logger/logging.service';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetSortBooksService {

/*##############################*/
  detective = 'Детективы';
  fantastic = 'Фантастика';
  adventure = 'Приключения';
  business = 'Бизнес_книги';
  horror = 'Ужасы';
  love_affairs = 'Любовные_романы';
/*##############################*/
  russian = 'Русский';
  ukranian = 'Украинский';
  english = 'Английский';

  url = 'http://localhost:3000/bookLists/';

  constructor(private http: HttpClient, private logger: LoggingService) { }

/*###################################################################################################### */
  public getDetective(){
    return this.http.get(this.url).pipe(
      map((data: any) => {
        return data.filter(data => {
          if(this.detective == 'Детективы'){
            this.logger.info('Успех, получены книги жанра', this.detective);
            return data.genre == this.detective;  
          }else
          {
            this.logger.error('Ошибка, сервер не вернул данные c жанром', this.detective)
          }
      });
    }),catchError(error => {
        return throwError(error);
      })
  )};

/*###################################################################################################### */ 
  public getFantastik(){
    return this.http.get(this.url).pipe(
      map((data: any) => {
        return data.filter(data => {
          if(this.fantastic == 'Фантастика'){
            this.logger.info('Успех, получены книги жанра', this.fantastic);
            return data.genre == this.fantastic 
          }else
            {
              this.logger.error('Ошибка, сервер не вернул данные c жанром', this.fantastic)
            }     
      });
    }),catchError(error => {
        return throwError(error);
      })
  )};

/*###################################################################################################### */ 
  public getAdventure(){
    return this.http.get(this.url).pipe(
      map((data: any) => {
        return data.filter(data => {
          if(this.adventure == 'Приключения'){
            this.logger.info('Успех, получены книги жанра', this.adventure);
            return data.genre == this.adventure;
          }else
            {
              this.logger.error('Ошибка, сервер не вернул данные c жанром',this.adventure)
            }               
      });
    }),catchError(error => {
        return throwError(error);
      })
  )};

/*###################################################################################################### */
  public getBusiness(){
    return this.http.get(this.url).pipe(
      map((data: any) => {
        return data.filter(data => {
          if(this.business == 'Бизнес_книги'){
            this.logger.info('Успех, получены книги жанра', this.business);
            return data.genre == this.business;
          }else
            {
              this.logger.error('Ошибка, сервер не вернул данные c жанром',this.business)
            }             
      });
    }),catchError(error => {
        return throwError(error);
    })
  )};

/*###################################################################################################### */
public getHorror(){
  return this.http.get(this.url).pipe(
    map((data: any) => {
      return data.filter(data => {
        if(this.horror == 'Ужасы'){
          this.logger.info('Успех, получены книги жанра', this.horror);
          return data.genre == this.horror;  
        }else
        {
          this.logger.error('Ошибка, сервер не вернул данные c жанром', this.horror)
        }
    });
  }),catchError(error => {
      return throwError(error);
    })
)};
/*###################################################################################################### */

  public getLoveAffairs(){
    return this.http.get(this.url).pipe(
      map((data: any) => {
        return data.filter(data => {
          if(this.love_affairs == 'Любовные_романы'){
            this.logger.info('Успех, получены книги жанра', this.horror);
            return data.genre == this.love_affairs;
          }else
            {
              this.logger.error('Ошибка, сервер не вернул данные c жанром',this.horror)
            }            
        });
    }),catchError(error => {
        return throwError(error);
    })
  )};

/*###########################################Сортировка по языку################################################## */
public getRus(){
  return this.http.get(this.url).pipe(
    map((data: any) => {
      return data.filter(data => {
        if(this.russian == 'Русский'){
          this.logger.info('Успех, получены книги на ' + this.russian + ' языке');
          return data.language == this.russian;
        }else
          {
            this.logger.error('Ошибка, сервер не вернул данные на' + this.russian + ' языке')
          }            
        });
      }),catchError(error => {
        return throwError(error);
    })
  )};

/*###################################################################################################### */

public getUkr(){
  return this.http.get(this.url).pipe(
    map((data: any) => {
      return data.filter(data => {
        if(this.ukranian == 'Украинский'){
          this.logger.info('Успех, получены книги на ' + this.ukranian + ' языке');
          return data.language == this.ukranian;
        }else
          {
            this.logger.error('Ошибка, сервер не вернул данные на' + this.ukranian + ' языке')
          }            
        });
      }),catchError(error => {
        return throwError(error);
    })
  )};

/*###################################################################################################### */
  public getEng(){
    return this.http.get(this.url).pipe(
      map((data: any) => {
        return data.filter(data => {
          if(this.english == 'Английский'){
            this.logger.info('Успех, получены книги на ' + this.english + ' языке');
            return data.language == this.english;
          }else
            {
              this.logger.error('Ошибка, сервер не вернул данные на' + this.english + ' языке')
            }            
          });
        }),catchError(error => {
          return throwError(error);
      })
    )};

}
