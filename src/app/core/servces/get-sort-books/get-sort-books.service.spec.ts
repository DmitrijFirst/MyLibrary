import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GetSortBooksService } from './get-sort-books.service';

describe('HttpTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [GetSortBooksService]
  }));

  it('should be created', () => {
    const service: GetSortBooksService = TestBed.get(GetSortBooksService);
    expect(service).toBeTruthy();
  });
/*############################################################################################################### */
  it('should sort books, genre Detective', inject([GetSortBooksService, HttpTestingController], (service: GetSortBooksService, beckend: HttpTestingController) => {
    const mockBooks = [];
    expect(service).toBeTruthy();

    service.getDetective().subscribe(books =>{
      expect(books).toEqual(mockBooks);
    });

    beckend.expectOne({
      method: 'GET',
      url: 'http://localhost:3000/bookLists/'
    }).flush(mockBooks)
  }));

/*############################################################################################################### */
  it('should sort books, genre Fantastik', inject([GetSortBooksService, HttpTestingController], (service: GetSortBooksService, beckend: HttpTestingController) => {
    const mockBooks = [];
    expect(service).toBeTruthy();

    service.getFantastik().subscribe(books =>{
      expect(books).toEqual(mockBooks);
    });

    beckend.expectOne({
      method: 'GET',
      url: 'http://localhost:3000/bookLists/'
    }).flush(mockBooks)
  }));

/*############################################################################################################### */
  it('should sort books, genre Adventure', inject([GetSortBooksService, HttpTestingController], (service: GetSortBooksService, beckend: HttpTestingController) => {
    const mockBooks = [];
    expect(service).toBeTruthy();

    service.getAdventure().subscribe(books =>{
      expect(books).toEqual(mockBooks);
    });

    beckend.expectOne({
      method: 'GET',
      url: 'http://localhost:3000/bookLists/'
    }).flush(mockBooks)
  }));

  /*############################################################################################################### */
  it('should sort books, genre Adventure', inject([GetSortBooksService, HttpTestingController], (service: GetSortBooksService, beckend: HttpTestingController) => {
    const mockBooks = [];
    expect(service).toBeTruthy();

    service.getAdventure().subscribe(books =>{
      expect(books).toEqual(mockBooks);
    });

    beckend.expectOne({
      method: 'GET',
      url: 'http://localhost:3000/bookLists/'
    }).flush(mockBooks)
  }));

});
