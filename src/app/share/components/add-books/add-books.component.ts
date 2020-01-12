import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '.././../../core/servces/http/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggingService } from 'src/app/core/logger/logging.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

 addForm: FormGroup;
 signupbtn = true;

  constructor(
    private http: HttpService ,
    private logger: LoggingService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

/*######################################################################################################## */   
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
      genre: ['',[Validators.required]],
      autor: ['', [Validators.required, Validators.minLength(5),Validators.maxLength(25)]],
      language: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(10)]]
    })
  }

/*########################################################################################################*/
  addBook() {
    const control = this.addForm.controls;
    if (this.addForm.invalid) {
      /** Если форма не валидна, то помечаем все контролы как touched*/
      Object.keys(control)
       .forEach(controlName => control[controlName].markAsTouched());
              /** Прерываем выполнение метода*/
       return;
    }else {
      this.http.postData(this.addForm.value).subscribe(data => {
        this.logger.info('Данные успешно добавлены!', this.addForm.value)
        this.addForm.reset();
          setTimeout(() =>{
            this.router.navigateByUrl('home');
          }, 1000)    
            this.logger.log('Успех - переадресация выполнена => "/home"');
        }),
           error => {
              this.logger.error('Возникла ошибка', error)
            };
        };
    }


}