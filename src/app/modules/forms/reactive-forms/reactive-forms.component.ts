import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([this.fb.control('')])
  });
  constructor(private fb: FormBuilder) {}

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  ngOnInit(): void {}

  updateName() {
    // stricly adheres to the structure of the form group and replace the entire value for the control
    this.profileForm.controls.firstName.setValue('Nancy');
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    // fails silently on those errors
    this.profileForm.patchValue({
      firstName: 'Nancy 2'
    });
  }
}
