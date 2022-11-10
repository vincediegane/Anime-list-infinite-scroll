import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Response } from './models/response.model';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  apiUrl: string = "https://kitsu.io/api/edge/anime";

  constructor(private http: HttpClient) { }

  getAnimes(): Observable<Response> {
    return this.http.get<Response>(this.apiUrl);
  }

  getNextAnimes(nextUrl: string): Observable<Response> {
    return this.http.get<Response>(nextUrl);
  }
}
