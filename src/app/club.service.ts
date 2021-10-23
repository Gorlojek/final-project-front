import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Club } from './club';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }


  public getClubs(): Observable<Club[]>{
    return this.http.get<Club[]>(`${this.apiServerUrl}/club/all`);
  }
  public addClub(club: Club): Observable<Club>{
    return this.http.post<Club>(`${this.apiServerUrl}/club/add`, club);
  }
  public updateClub(club: Club): Observable<Club>{
    return this.http.put<Club>(`${this.apiServerUrl}/club/update`, club);
  }

  public deleteClub(clubId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/club/delete/${clubId}`);
  }
  public getClub(clubId: number): Observable<Club>{
    return this.http.get<Club>(`${this.apiServerUrl}/club/find/${clubId}`);
  }

  
}
