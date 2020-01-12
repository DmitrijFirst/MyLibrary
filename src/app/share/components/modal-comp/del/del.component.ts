import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LoggingService } from 'src/app/core/logger/logging.service';



@Component({
  selector: 'app-del',
  templateUrl: './del.component.html',
  styleUrls: ['./del.component.css'],
})
export class DelComponent implements OnInit {

  constructor(
    private matDialogRef: MatDialogRef<DelComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private logger: LoggingService
     ) { }


  ngOnInit() {
    
  }

  closeDialog() {
    this.matDialogRef.close(false);
  }

}
