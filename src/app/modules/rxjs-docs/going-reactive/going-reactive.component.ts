import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/photo';
import { FakeApiService } from 'src/app/services/fake-api.service';

@Component({
  selector: 'app-going-reactive',
  templateUrl: './going-reactive.component.html',
  styleUrls: ['./going-reactive.component.scss']
})
export class GoingReactiveComponent implements OnInit {
  photos$: Observable<Photo[]> | null = null;
  constructor(
    private fakeApiService: FakeApiService
  ) { 
    this.photos$ = this.fakeApiService.getPhotos();
  }

  ngOnInit(): void {
  }

}
