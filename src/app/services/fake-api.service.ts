import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest, merge, Observable, of, Subject, throwError } from 'rxjs';
import { catchError, map, scan, shareReplay, tap } from 'rxjs/operators';
import { Photo } from '../modules/shared/interfaces/photo';
import { PhotoCategory } from '../modules/shared/interfaces/photo-category';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  private entity = 'photos';
  // declarative
  photos$: Observable<Photo[]> = this.http.get<Photo[]>(`${this.baseUrl}/${this.entity}`).pipe(
    map((photos: Photo[]) => {
      const listOfPhotos: { [key: string]: Photo[] } = {};

      // take first 3 photos from each album
      photos.forEach((photo) => {
        if (photo.albumId <= 4) {
          if (!listOfPhotos[photo.albumId]) {
            listOfPhotos[photo.albumId] = [photo];
          } else if (listOfPhotos[photo.albumId] && listOfPhotos[photo.albumId].length < 3) {
            listOfPhotos[photo.albumId] = [...listOfPhotos[photo.albumId], photo];
          }
        }
      });

      const listOfPhotosKeys = Object.keys(listOfPhotos);
      return listOfPhotosKeys
        .map((key: string) => {
          return listOfPhotos[key];
        })
        .reduce((acc, curr) => {
          return [...acc, ...curr];
        }, []);
    }),
    shareReplay(1),
    catchError((error) => {
      console.log('GET PHOTOS error: ', error);
      return throwError("Couldn't get the photos!");
    })
  );

  photoCategories$ = of([
    <PhotoCategory>{
      categoryName: 'First album',
      categoryId: 1
    },
    <PhotoCategory>{
      categoryName: 'Second album',
      categoryId: 2
    },
    <PhotoCategory>{
      categoryName: 'Third album',
      categoryId: 3
    }
  ]).pipe(shareReplay(1));

  photosWithCategories$: Observable<Photo[]> = combineLatest([this.photos$, this.photoCategories$]).pipe(
    map(([photos, photoCategories]) => {
      return <Photo[]>photos.map(
        (photo: Photo) =>
          ({
            ...photo,
            categoryName: photoCategories.find((category) => category.categoryId === photo.albumId)?.categoryName || 'Random Album'
          } as Photo)
      );
    }),
    shareReplay(1)
  );

  private photoInsertedSubject = new Subject<Photo>();
  photoInsertedAction$ = this.photoInsertedSubject.asObservable();

  photosWithAdd$: Observable<Photo[]> = merge(this.photosWithCategories$, this.photoInsertedAction$).pipe(
    tap(console.log),
    scan((acc: Photo[], value: Photo) => {
      return [value, ...acc];
    })
  );

  constructor(private http: HttpClient) {}

  addPhoto(newPhoto?: Photo) {
    newPhoto =
      newPhoto ||
      <Photo>{
        albumId: 1,
        id: 1,
        title: 'Custom Photo',
        thumbnailUrl: 'https://cdn.wallpapersafari.com/62/47/yXrzD7.jpg',
        url: 'https://cdn.wallpapersafari.com/62/47/yXrzD7.jpg'
      };

    this.photoInsertedSubject.next(newPhoto);
  }

  getPhotoById(id: number): Observable<Photo> {
    return this.http.get<Photo>(`${this.baseUrl}/${this.entity}/${id}`);
  }
}
