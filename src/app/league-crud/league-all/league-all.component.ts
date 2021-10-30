import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { League } from 'src/app/league';
import { LeagueService } from 'src/app/league.service';

@Component({
  selector: 'app-league-all',
  templateUrl: './league-all.component.html',
  styleUrls: ['./league-all.component.css']
})
export class LeagueAllComponent implements OnInit {
  @ViewChild('myModel') myModel: any;
  public leagues: League[] = []; 
  constructor(private leagueService: LeagueService) { }

  ngOnInit(): void {
    this.getLeagues();
    
  }
  public getLeagues(): void {
    this.leagueService.getLeagues().subscribe(
      (response: League[]) => {
        this.leagues = response;
      },
      (error: HttpErrorResponse)=>{
      }
    )
  }

  onAddLeague(addForm: NgForm){

  }

  public openModel() {
    this.myModel.nativeElement.className = 'modal fade show';
  }
  closeModel() {
    this.myModel.nativeElement.className = 'modal hide';
 }
}
