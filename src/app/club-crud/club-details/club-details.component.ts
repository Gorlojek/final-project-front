import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Club } from 'src/app/club';
import { ClubService } from 'src/app/club.service';

@Component({
  selector: 'app-club-details',
  templateUrl: './club-details.component.html',
  styleUrls: ['./club-details.component.css']
})
export class ClubDetailsComponent implements OnInit {
  public club: Club | undefined;
  public param: string = '';
  public id: number = 0;

  constructor(private clubService: ClubService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.param = this.route.snapshot.paramMap.get('id')||'';
    this.id = parseInt(this.param)
    this.getClub(this.id); 

    
  }
  
  

  public getClub(id: number): void {
    this.clubService.getClub(id).subscribe(
      (response: Club) => {
        this.club = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }
}
