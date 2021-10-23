import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { League } from './league';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }


  public getLeagues(): Observable<League[]>{
    return this.http.get<League[]>(`${this.apiServerUrl}/club/all`);
  }
  public addLeague(club: League): Observable<League>{
    return this.http.post<League>(`${this.apiServerUrl}/club/add`, club);
  }
  public updateLeague(club: League): Observable<League>{
    return this.http.put<League>(`${this.apiServerUrl}/club/update`, club);
  }

  public deleteLeague(clubId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/club/delete/${clubId}`);
  }
  public getLeague(clubId: number): Observable<League>{
    return this.http.get<League>(`${this.apiServerUrl}/club/find/${clubId}`);
  }

  
}
