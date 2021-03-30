import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.scss']
})
export class AddPhotoComponent implements OnInit {
  photoForm: FormGroup = this.fb.group({
    albumId: this.fb.control('', [Validators.required, Validators.min(1), Validators.max(5)]),
    title: this.fb.control('', [Validators.required]),
    url: this.fb.control('', [Validators.required]),
    thumbnailUrl: this.fb.control('', [Validators.required])
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onSubmit(event: FormGroup) {
    console.log('a', event);
  }

}
