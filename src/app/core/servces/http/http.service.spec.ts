import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpService } from './http.service';

describe('HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [HttpService]
  }));

  it('should be created', () => {
    const service: HttpService = TestBed.get(HttpService);
    expect(service).toBeTruthy();
  });

  //Получаем все книги
  it('should get books', inject([HttpService, HttpTestingController], (service: HttpService, beckend: HttpTestingController) => {
    const mockBooks = [];
    expect(service).toBeTruthy();

    service.getData().subscribe(books =>{
      expect(books).toEqual(mockBooks);
    });

    beckend.expectOne({
      method: 'GET',
      url: 'http://localhost:3000/bookLists/'
    }).flush(mockBooks)
  }));

  //Удаление книги
  it('should del one book', inject([HttpService, HttpTestingController], (service: HttpService, beckend: HttpTestingController) => {
    const mockBook = [];
    expect(service).toBeTruthy();

    service.delete(1).subscribe(book =>{
      expect(book).toEqual(mockBook);
    });

    beckend.expectOne({
      method: 'DELETE',
      url: 'http://localhost:3000/bookLists/1'
    }).flush(mockBook)
  }));

    //Добавление книги 
    it('add one book', inject([HttpService, HttpTestingController], (service: HttpService, beckend: HttpTestingController) => {
      
      const mockBook = [];
      expect(service).toBeTruthy();
  
      service.postData(mockBook['']).subscribe(book =>{
        expect(book).toEqual(mockBook);
      });
  
      beckend.expectOne({
        method: 'POST',
        url: 'http://localhost:3000/bookLists/'
      }).flush(mockBook)
    }));
});
