import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddBooksComponent } from './add-books.component';
import { HttpService } from 'src/app/core/servces/http/http.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AddBooksComponent', () => {
  let component: AddBooksComponent;
  let fixture: ComponentFixture<AddBooksComponent>;
  let httpService: HttpService;
  let spy: jasmine.Spy;
  let mockBook = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule, FormsModule, RouterTestingModule.withRoutes([])],
      declarations: [ AddBooksComponent ],
      providers: [HttpService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBooksComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    httpService = fixture.debugElement.injector.get(HttpService);
    spy = spyOn(httpService, 'postData').and.returnValue(of(mockBook))
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

/*########################################################################################################*/
  //Вызываем метод addBook()
  it('should call httpService', () => {
    component.addBook();
    expect(spy.calls.first).toBeTruthy(true);
  });

/*########################################################################################################*/
  //Форма не валидна когда пусто
  it('form invalid when empty', () => {
    expect(component.addForm.valid).toBeFalsy();
  });

/*########################################################################################################*/
 //Проверяем поля формы description
 it('form field validate description', () => {
    let errors = {};
    let description = component.addForm.controls['description'];
    expect(description.valid).toBeFalsy();

    //Поле описание, обязательно для заполнения
    errors = description.errors || {};
    expect(errors['required']).toBeTruthy();

    //Устанавливаем description меньше требуемого кол-ва знаков
    description.setValue('abcd');
    errors = description.errors || {};
    expect(errors['required']).toBeFalsy();

    //Устанавливаем правильное значение
    description.setValue('abcdifgjrt');
    errors = description.errors || {};
    expect(errors['required']).toBeFalsy();
  });

/*########################################################################################################*/
  //Проверяем поля формы title
  it('form field validate title', () => {
    let errors = {};
    let title = component.addForm.controls['title'];
    expect(title.valid).toBeFalsy();
  
      //Поле описание, обязательно для заполнения
    errors = title.errors || {};
    expect(errors['required']).toBeTruthy();

    //Устанавливаем description меньше требуемого кол-ва знаков
    title.setValue('abcd');
    errors = title.errors || {};
    expect(errors['required']).toBeFalsy();

    //Устанавливаем description больше требуемого кол-ва знаков
    title.setValue('abcdjpoutyhfrtghjknbcvfghjk');
    errors = title.errors || {};
    expect(errors['required']).toBeFalsy();

    //Устанавливаем правильное значение
    title.setValue('abcdifgjrt');
    errors = title.errors || {};
    expect(errors['required']).toBeFalsy();

    });
  
/*########################################################################################################*/
  it('form field validate genre', () => {
    let errors = {};
    let genre = component.addForm.controls['genre'];
    expect(genre.valid).toBeFalsy();
    
    //Поле обязательно для заполнения
    errors = genre.errors || {};
    expect(errors['required']).toBeTruthy();
    });
/*########################################################################################################*/
  //Проверяем поля формы autor
  it('form field validate autor', () => {
    let errors = {};
    let autor = component.addForm.controls['autor'];
    expect(autor.valid).toBeFalsy();
  
    //Поле описание, обязательно для заполнения
    errors = autor.errors || {};
    expect(errors['required']).toBeTruthy();

    //Устанавливаем description меньше требуемого кол-ва знаков
    autor.setValue('abcd');
    errors = autor.errors || {};
    expect(errors['required']).toBeFalsy();

    //Устанавливаем description больше требуемого кол-ва знаков
    autor.setValue('abcdjpoutyhfrtghjknbcvfghjk');
    errors = autor.errors || {};
    expect(errors['required']).toBeFalsy();

    //Устанавливаем правильное значение
    autor.setValue('abcdifgjrt');
    errors = autor.errors || {};
    expect(errors['required']).toBeFalsy();

    });

  /*########################################################################################################*/
  it('form field validate language', () => {
    let errors = {};
    let language = component.addForm.controls['language'];
    expect(language.valid).toBeFalsy();
    
    //Поле обязательно для заполнения
    errors = language.errors || {};
    expect(errors['required']).toBeTruthy();
    });

});
