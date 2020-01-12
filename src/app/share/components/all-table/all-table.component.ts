import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../core/servces/http/http.service';
import { SortTableService } from '../../../core/servces/sort-table/sort-table.service';
import { Book } from '../../../model/book';
import { LoggingService } from 'src/app/core/logger/logging.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ModalService } from 'src/app/core/servces/modal/modal.service';


@Component({
  selector: 'app-all-table',
  templateUrl: './all-table.component.html',
  styleUrls: ['./all-table.component.css']
})
export class AllTableComponent implements OnInit {

  books: Book[] = [];
  public sortValue = false;
  public sortGanre = false;
  public sortLanguage = false;
  public sortAutor = false;
  public searchText : string;
  
  constructor(
    private http: HttpService,
    private httpSort: SortTableService,
    private logger: LoggingService,
    private dialogService: ModalService
  ) { }

  ngOnInit() {
    this.http.getData().subscribe(res => {
      this.books = res;
      this.logger.info('Данные всей библиотеки загружены');
    }),catchError(error => {
        return throwError(error);
      })
  }

public sortTitle() { 
    if(this.sortValue == true) {
      this.httpSort.getDataSort().subscribe(res => {
       this.books = res;
    })
    }else{
      this.httpSort.getData().subscribe(res => {
        this.books = res;
        this.logger.info('Сортировка по названию отменена');

    })
    }
  }

public sortGenre() { 
    if(this.sortGanre == true) {
      this.httpSort.getGenreSort().subscribe(res => {
        this.books = res;
      })
    }else{
      this.httpSort.getData().subscribe(res => {
        this.books = res;
      })
    }
  }

public sortLang() { 
  if(this.sortLanguage == true) {
    this.httpSort.getLangSort().subscribe(res => {
      this.books = res;
    })
  }else{
    this.httpSort.getData().subscribe(res => {
      this.books = res;
    })
    }
  }

public sortingAutor() { 
  if(this.sortAutor == true) {
    this.httpSort.getAutorSort().subscribe(res => {
      this.books = res;
     })
  }else{
    this.httpSort.getData().subscribe(res => {
      this.books = res;
    })
    }
  }
  
public saveBook(){
    this.dialogService.openSaveDialog();
  };


}

