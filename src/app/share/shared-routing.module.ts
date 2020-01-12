import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  DetectiveComponent,
  HorrorComponent,
  FantasticComponent,
  AdventureComponent,
  LoveAffairsComponent,
  BusinessComponent,
  GetBooksComponent,
  AddBooksComponent,
  AllTableComponent,
  RusComponent,
  UkrComponent,
  AngComponent
} from './components/index';

const routes: Routes = [
  {
    path: 'home',
    component: GetBooksComponent
  },
  {
    path: 'add', 
    component: AddBooksComponent
  },
  {
    path: 'all',
    component: AllTableComponent
  },
  {
    path: 'detective',
    component: DetectiveComponent
  },
  {
    path: 'horror',
    component: HorrorComponent
  },
  {
    path: 'fantastic',
    component: FantasticComponent
  },
  {
    path: 'adventure',
    component: AdventureComponent
  },
  {
    path: 'business',
    component: BusinessComponent
  },
  {
    path: 'love-affairs',
    component: LoveAffairsComponent
  },
  {
    path: 'russian-books',
    component: RusComponent
  },
  {
    path: 'ukranian-books',
    component: UkrComponent
  },
  {
    path: 'english-books',
    component: AngComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
