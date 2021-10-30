import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClubUpdateComponent } from './club-crud/club-update/club-update.component';
import { ClubComponent } from './club-crud/club/club.component';
import { ClubDeleteComponent } from './club-crud/club-delete/club-delete.component';
import { AddClubComponent } from './club-crud/add-club/add-club.component';
import { ClubDetailsComponent } from './club-crud/club-details/club-details.component';
import { LeagueAllComponent } from './league-crud/league-all/league-all.component';



const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch: 'full'},
  {path: 'club/edit/:id',component: ClubUpdateComponent},
  {path: 'club/delete/:id',component: ClubDeleteComponent},
  {path: 'club/add',component: AddClubComponent},
  {path: 'club',component: ClubComponent},
  {path: 'club/details/:id',component: ClubDetailsComponent},
  {path: 'league',component: LeagueAllComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
