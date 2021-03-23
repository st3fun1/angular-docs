import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable, throwError} from 'rxjs';
import { catchError, retry,map} from 'rxjs/operators';
import { Photo } from '../photo';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  private entity = 'photos';

  constructor(private http: HttpClient) { 
  }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/${this.entity}`);
  }

}
