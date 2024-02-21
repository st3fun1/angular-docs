import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.scss'],
})
export class AddPhotoComponent implements OnInit {
  photoForm: UntypedFormGroup = this.fb.group({
    albumId: this.fb.control('', [
      Validators.required,
      Validators.min(1),
      Validators.max(5),
    ]),
    title: this.fb.control('', [Validators.required]),
    url: this.fb.control('', [Validators.required]),
    thumbnailUrl: this.fb.control('', [Validators.required]),
  });

  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit(): void {}

  onSubmit(event: UntypedFormGroup) {
    console.log('a', event);
  }
}
