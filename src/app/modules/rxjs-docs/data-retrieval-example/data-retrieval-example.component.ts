import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, combineLatest, EMPTY, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { FakeApiService } from '../../../services/fake-api.service';
import { Photo } from '../../shared/interfaces/photo';

@Component({
  selector: 'app-data-retrieval-example',
  templateUrl: './data-retrieval-example.component.html',
  styleUrls: ['./data-retrieval-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataRetrievalExampleComponent implements OnInit {
  private categorySelectedSubject = new BehaviorSubject<number | string>('');
  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();
  displayedColumns: string[] = ['categoryName', 'title', 'thumbnailUrl'];
  photoCategories$ = this.fakeApiService.photoCategories$;
  categorySelectedAction$ = this.categorySelectedSubject.asObservable();
  // data stream
  filteredPhotos$ = combineLatest([
    // data stream
    this.fakeApiService.photosWithAdd$,
    // action stream
    this.categorySelectedAction$
  ]).pipe(
    catchError((error) => {
      this.errorMessageSubject.next(error);
      return EMPTY;
    }),
    map(([photos, categoryId]) => {
      console.log(photos, categoryId);
      return photos.filter((photo: Photo) => {
        return categoryId ? photo.albumId === categoryId : true;
      });
    })
  );

  constructor(private fakeApiService: FakeApiService, private router: Router) {}

  ngOnInit(): void {
    // declarative
  }

  showBigImage(photo: Photo) {
    this.router.navigate(['going-reactive', 'data-retrieval-example', 'photo', photo.id]);
  }

  handleCategoryChange(event: any) {
    this.categorySelectedSubject.next(event.value);
  }

  handleAddPhoto() {
    this.router.navigate(['going-reactive', 'data-retrieval-example', 'add', 'photo']);
  }

  addNewItemInline() {
    this.fakeApiService.addPhoto();
  }
}
