import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../core/servces/http/http.service';
import { ModalService } from '../../../core/servces/modal/modal.service';
import { Book } from '../../../model/book';
import { LoggingService } from 'src/app/core/logger/logging.service';
import { throwError} from 'rxjs';
import { catchError} from 'rxjs/operators';


@Component({
  selector: 'app-get-books',
  templateUrl: './get-books.component.html',
  styleUrls: ['./get-books.component.css'],
  providers: [HttpService , LoggingService]
})
export class GetBooksComponent implements OnInit {

  books: Book[] = [];
  constructor(
    private http: HttpService, 
    private dialogService: ModalService,
    private logger: LoggingService

    ) { }

  ngOnInit() {
    this.http.getData().subscribe(res => {
      this.books = res;
      this.logger.log('Операция выполненна успешно, данные получены')
    })
  }

/*################################################################################################# */  

public deleteBook(book: Book) {
  this.dialogService.openConfirmDialog().afterClosed().subscribe(res => {
    if(res){
      this.http.delete(book.id).subscribe(res => {
        this.books = this.books.filter(u => u !== book);
        this.logger.info('Удаление книги ' + book.title + ' успешно!')
      }),catchError(error => {
          return throwError(error)
        }
      )}
  })  
}

/*################################################################################################# */  

saveBook(){
  this.dialogService.openSaveDialog();
};

}
