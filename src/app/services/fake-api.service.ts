import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { combineLatest, from, Observable, of, throwError} from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';
import { Photo } from '../photo';
import { PhotoCategory } from '../photo-category';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  private entity = 'photos';
  // declarative
  photos$ = this.http.get<Photo[]>(`${this.baseUrl}/${this.entity}`).pipe(
    tap(console.log),
    catchError((error) => {
      console.log('GET PHOTOS error: ', error);
      return throwError("Couldn't get the photos!");
    })
  );

  photoCategories$ = of([<PhotoCategory>{
    categoryName: 'First album',
    categoryId: 1
  }, <PhotoCategory>{
    categoryName: 'Second album',
    categoryId: 2
  }, <PhotoCategory>{
    categoryName: 'Third album',
    categoryId: 3
  }]);

  photosWithCategories$ = combineLatest([
    this.photos$,
    this.photoCategories$
  ]).pipe(
    map(([photos, photoCategories]) => {
      return photos.map((photo: Photo) => ({
        ...photo,
        categoryName: (photoCategories.find( category => category.categoryId === photo.albumId)?.categoryName) || "Random Album"
      }));
    })
  );

  constructor(private http: HttpClient) { 
  }

  getPhotoById(id: number): Observable<Photo> {
    return this.http.get<Photo>(`${this.baseUrl}/${this.entity}/${id}`).pipe(
      tap(console.log)
    );
  }

}
