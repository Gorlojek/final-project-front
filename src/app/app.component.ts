
import { Component, OnInit,  } from '@angular/core';


import { ClubService } from './club.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title: string = 'DUPA';

  constructor() { }

  ngOnInit(){

  }

  
 }

