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

  ngOnInit(): void {
  }

}
