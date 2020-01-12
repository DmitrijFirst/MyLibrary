import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BookFilterPipe } from './pipe/filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  DetectiveComponent,
  HorrorComponent,
  FantasticComponent,
  AdventureComponent,
  LoveAffairsComponent,
  BusinessComponent,
  GetBooksComponent,
  AddBooksComponent,
  DelComponent,
  SaveComponent,
  AllTableComponent,
  NavComponent,
  RusComponent,
  UkrComponent,
  AngComponent
} from './components/index';

@NgModule({
  declarations: [
    GetBooksComponent, 
    AddBooksComponent, 
    DelComponent, 
    SaveComponent,
    AllTableComponent,
    BookFilterPipe,
    NavComponent,
    DetectiveComponent,
    HorrorComponent,
    FantasticComponent,
    AdventureComponent,
    LoveAffairsComponent,
    BusinessComponent,
    RusComponent,
    UkrComponent,
    AngComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  exports: [GetBooksComponent,NavComponent],
  entryComponents: [DelComponent, SaveComponent]
})
export class ShareModule { }
