import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClubService } from '../../club.service';

@Component({
  selector: 'app-club-delete',
  templateUrl: './club-delete.component.html',
  styleUrls: ['./club-delete.component.css']
})
export class ClubDeleteComponent implements OnInit {
  public param: string = '';
  private clubId: number = 0;
  constructor(private clubService: ClubService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.param = this.route.snapshot.paramMap.get('id')||'';
    this.clubId = parseInt(this.param)
    this.onDelete();
  }

  public deleteClub(clubId:number): void {
    this.clubService.deleteClub(clubId).subscribe(
      (response: void) => {
        console.log(response);

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      )
  }

onDelete(){
  console.log(this.clubId);
  this.deleteClub(this.clubId);
  let n: ReturnType<typeof setTimeout>;
  n = setTimeout(() => this.router.navigate(['/club']), 100);
  this.clubService.getClubs(); 
}

}
