import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Club } from '../../club';
import { ClubService } from '../../club.service';
import { HttpErrorResponse,  HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-club-update',
  templateUrl: './club-update.component.html',
  styleUrls: ['./club-update.component.css']
})
export class ClubUpdateComponent implements OnInit {

  public club: Club | undefined;
  @Input() name: string = '';
  public param: string = '';
  @Input() id: number = 0;
  constructor(private clubService: ClubService,
    private route: ActivatedRoute,
    private router: Router) { 


  }

  ngOnInit(): void {
    this.param = this.route.snapshot.paramMap.get('id')||'';
    this.id = parseInt(this.param)
    this.getClub(this.id);  
    ;
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
  public uptadeClub(club: Club): void{
    this.clubService.updateClub(club).subscribe(
      (response: Club) => {
        this.club = response;
        this.clubService.getClubs();
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }
  onSubmit(updateForm: NgForm) {
    this.uptadeClub(updateForm.value)
      this.router.navigate(['/club']);    
    }

}
