import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Input, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Club } from '../../club';
import { ClubService } from '../../club.service';
import { NgpSortModule } from "ngp-sort-pipe";


@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {
  p: number = 1;
  @Input() clubName: any;
  public clubs: Club[] = []; 
  private clubId: number = 0;
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
      }
    )
  }
  
  public deleteClub(clubId:number): void {
    this.clubService.deleteClub(clubId).subscribe(
      (response: void) => {
        console.log(response);
        this.getClubs();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      )
  }

onDelete(){
  console.log(this.clubId);
  // this.deleteClub(this.clubId);
  // this.router.navigate(['/club']);    
}

search(){
  if(this.clubName == ""){
    this.ngOnInit();
  }else{
    this.clubs = this.clubs.filter(res => {

      return res.name.toLocaleLowerCase().match(this.clubName.toLocaleLowerCase());
    }
    )
  }
}
key = 'name';
reverse: boolean= false; 
sort(key: string){
  this.key=key;
  this.reverse = !this.reverse;
  console.log(this.clubs);
  
  if(this.reverse){
    this.clubs = this.clubs.sort();
  }else{
    this.clubs = this.clubs.reverse();
  }

}
}

