import { Component, OnInit } from '@angular/core';
import { Book } from '../../../../model/book';
import { GetSortBooksService } from 'src/app/core/servces/get-sort-books/get-sort-books.service';
import { ModalService } from 'src/app/core/servces/modal/modal.service';
import { throwError} from 'rxjs';
import { catchError} from 'rxjs/operators';
import { HttpService } from 'src/app/core/servces/http/http.service';
import { LoggingService } from 'src/app/core/logger/logging.service';


@Component({
  selector: 'app-ang',
  templateUrl: './ang.component.html',
  styleUrls: ['./ang.component.css']
})
export class AngComponent implements OnInit {

  books: Book[] = [];

  constructor(
    private httpSort: GetSortBooksService,
    private dialogService: ModalService,
    private http: HttpService,
    private logger: LoggingService
    ) { }

  ngOnInit() {
    this.httpSort.getEng().subscribe(res => {
      this.books = res;
    });
  };

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
public saveBook(){
  this.dialogService.openSaveDialog();
};

}
