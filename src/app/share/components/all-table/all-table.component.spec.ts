import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { AllTableComponent } from './all-table.component';
import { HttpService } from 'src/app/core/servces/http/http.service';
import { SortTableService } from 'src/app/core/servces/sort-table/sort-table.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ModalService } from 'src/app/core/servces/modal/modal.service';
import { FormsModule } from '@angular/forms';
import { BookFilterPipe } from '../../pipe/filter.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { of } from 'rxjs';


describe('AllTableComponent', () => {
  let component: AllTableComponent;
  let fixture: ComponentFixture<AllTableComponent>;
  let httpService: HttpService;
  let sortTableService: SortTableService;
  let spy: jasmine.Spy;
  let spySort: jasmine.Spy;
  let mockBook = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, FormsModule , MatDialogModule], 
      declarations: [ AllTableComponent, BookFilterPipe ],
      providers: [ HttpService, SortTableService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTableComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    httpService = fixture.debugElement.injector.get(HttpService);
    sortTableService = fixture.debugElement.injector.get(SortTableService);
    spy = spyOn(httpService, 'getData').and.returnValue(of(mockBook))
    spySort = spyOn(sortTableService, 'getDataSort').and.returnValue(of(mockBook))
    fixture.detectChanges();
  });

/*##############################################################################################*/
  it('should create', () => {
    expect(component).toBeTruthy();
  });

/*############################################################################################## */
//Проверяем вызов httpService
  it('should call httpService', () => {
    component.ngOnInit();
    expect(spy.calls.any()).toBeTruthy();
  });

/*############################################################################################## */
  //Проверяем книги
  it('should set books', () => {
    component.ngOnInit();
    expect(component.books).toBeTruthy(mockBook);
  });

/*##############################################################################################*/
//Проверяем метод при вызове true
  it('should set books', () => {
    component.sortTitle();
    expect(spySort.calls.all()).toBeTruthy(true);
  });

/*##############################################################################################*/
//Проверяем метод при вызове false
  it('should set books', () => {
    component.sortTitle();
    expect(spySort.calls.all()).toBeTruthy(false);
  });
});
