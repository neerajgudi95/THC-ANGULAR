import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators
} from '@angular/forms';
import { CommonService } from '../../../common/_services/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  validateForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
    checkPassword: FormControl<string>;
    fullName: FormControl<string>;
    phoneNumber: FormControl<string>;
    profession: FormControl<string>;
  }> = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    checkPassword: ['', [Validators.required]],
    fullName: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    profession: ['', [Validators.required]],
  });

  constructor(
    private fb: NonNullableFormBuilder,
    private commonService: CommonService
  ) {}

  updateConfirmValidator() {}

  submitForm(): void {
    if (this.validateForm.valid) {
      this.registerUser();
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  registerUser() {
    this.commonService.login(this.validateForm.value).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {},
    });
  }
}
