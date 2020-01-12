import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DelComponent } from '../../../share/components/modal-comp/del/del.component';
import { SaveComponent } from '../../../share/components/modal-comp/save/save.component';


 
@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(){
    return this.dialog.open(DelComponent,{
      width: '390px',
      disableClose: true
    })
  }

  openSaveDialog(){
    return this.dialog.open(SaveComponent,{
      width: '390px',
      disableClose: true
    })
  }
}
