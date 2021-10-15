import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Club } from './club';

import { ClubService } from './club.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public clubs: Club[] = []; 

  constructor(private clubService: ClubService) { }

  ngOnInit(){
    this.getClubs();
  }

  public getClubs(): void {
    this.clubService.getClubs().subscribe(
      (response: Club[]) => {
        this.clubs = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }
}
