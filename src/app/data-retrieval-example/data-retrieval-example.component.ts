import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { combineLatest, EMPTY, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Photo } from '../photo';
import { PhotoCategory } from '../photo-category';
import { FakeApiService } from '../services/fake-api.service';

@Component({
  selector: 'app-data-retrieval-example',
  templateUrl: './data-retrieval-example.component.html',
  styleUrls: ['./data-retrieval-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataRetrievalExampleComponent implements OnInit {
  displayedColumns: string[] = ['categoryName', 'title', 'thumbnailUrl'];
  error = '';
  photos$: Observable<Photo[]> | null = null;
  photoCategories$: Observable<PhotoCategory[]>  | null = null;

  constructor(
    private fakeApiService: FakeApiService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) { 
  }

  ngOnInit(): void {
    // declarative
    this.photoCategories$ =  this.fakeApiService.photoCategories$;

    this.photos$ = combineLatest([
      this.fakeApiService.photos$,
      this.photoCategories$
    ]).pipe(
      map(([photos, photoCategories]) => {
        return photos.map((photo: Photo) => ({
          ...photo,
          categoryName: (photoCategories.find( category => category.categoryId === photo.albumId)?.categoryName) || "Random Album"
        }));
      })
    );
  }

  showBigImage(photo: Photo) {
    this.router.navigate(['going-reactive', 'data-retrieval-example', 'photo', photo.id]);
  }

  onCategoryChange(event: MatSelectChange) {
    console.log('onCategoryChange:', event.value);
  }

}
