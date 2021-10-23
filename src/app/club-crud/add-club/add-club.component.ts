import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Club } from '../../club';
import { ClubService } from '../../club.service';

@Component({
  selector: 'app-add-club',
  templateUrl: './add-club.component.html',
  styleUrls: ['./add-club.component.css']
})
export class AddClubComponent implements OnInit {

  public club: Club | undefined;
  @Input() name: string = '';
  @Input() yearOfFoundation: number = 0;
  @Input() city: string = '';
  @Input() countryCode: string = '';
  @Input() position: number = 0;
  @Input() leagueCode: string = '';
  @Input() active: string = '';
  @Input() clubCode: string = '';
  constructor(private clubService: ClubService,
    private router: Router) { }

  ngOnInit(): void {
  }
  public addClub(club: Club): void{
    this.clubService.addClub(club).subscribe(
      (response: Club) => {
        this.club = response;

        
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }
  onAdd(addForm: NgForm) {
    this.addClub(addForm.value);
    addForm.reset();
    this.clubService.getClubs();
    this.router.navigate(['/club']);    
    }
}
