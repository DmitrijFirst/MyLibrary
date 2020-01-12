import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LoggingService } from 'src/app/core/logger/logging.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  constructor(
    private matDialogRef: MatDialogRef<SaveComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private logger: LoggingService
  ) { }

  ngOnInit() {
    this.logger.error('Сервис временно недоступен! Загрузка невозможна');
  }

  closeDialog() {
    this.matDialogRef.close(false);
  };
}
