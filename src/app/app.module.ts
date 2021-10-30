import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgpSortModule } from "ngp-sort-pipe";
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClubUpdateComponent } from './club-crud/club-update/club-update.component';
import { ClubComponent } from './club-crud/club/club.component';
import { ClubDeleteComponent } from './club-crud/club-delete/club-delete.component';
import { AddClubComponent } from './club-crud/add-club/add-club.component';
import { ClubDetailsComponent } from './club-crud/club-details/club-details.component';
import { RouterModule } from '@angular/router';
import { LeagueAllComponent } from './league-crud/league-all/league-all.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    AddClubComponent,
    ClubDetailsComponent,
    ClubUpdateComponent,
    ClubComponent,
    LeagueAllComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,RouterModule,
    NgpSortModule,
    OrderModule,
    NgxPaginationModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
