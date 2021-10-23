import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Input, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Club } from '../../club';
import { ClubService } from '../../club.service';


@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {
  private clubName: string = '';
  public clubs: Club[] = []; 
  private clubId: number = 0;
  constructor(private clubService: ClubService,
    private route: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone) { }

  ngOnInit(){ 
  this.getClubs();

  
  console.log(this.clubs);
  

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
  console.log(this.clubName);
  
  if(this.clubName=""){
    this.ngOnInit();
  }
  {
    this.clubs = this.clubs.filter(res =>{
      console.log(this.clubName)
    })
  }
}
}

