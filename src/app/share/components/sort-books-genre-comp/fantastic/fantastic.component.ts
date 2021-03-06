import { Component, OnInit } from '@angular/core';
import { GetSortBooksService } from '../../../../core/servces/get-sort-books/get-sort-books.service';
import { Book } from '../../../../model/book';
import { ModalService } from 'src/app/core/servces/modal/modal.service';
import { throwError} from 'rxjs';
import { catchError} from 'rxjs/operators';
import { HttpService } from 'src/app/core/servces/http/http.service';
import { LoggingService } from 'src/app/core/logger/logging.service';

@Component({
  selector: 'app-fantastic',
  templateUrl: './fantastic.component.html',
  styleUrls: ['./fantastic.component.css']
})
export class FantasticComponent implements OnInit {

  books: Book[] = [];

  constructor(
    private httpSort: GetSortBooksService,
    private dialogService: ModalService,
    private http: HttpService,
    private logger: LoggingService

    ) { }

  ngOnInit() {
    this.httpSort.getFantastik().subscribe(res => {
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
