import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Photo } from '../../../shared/interfaces/photo';
import { FakeApiService } from '../../../services/fake-api.service';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss']
})
export class PhotoDetailComponent implements OnInit {
  private id?: number;
  public currentPhoto?: Photo;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fakeApiService: FakeApiService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(console.log),
      switchMap(routeData => {
        return this.fakeApiService.getPhotoById(routeData.photoId);
      })
    ).subscribe( data => {
      this.currentPhoto = data;
    });
  }

}
