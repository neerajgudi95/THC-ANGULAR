import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { CommonService } from '../../../common/_services/common.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  validateForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }> = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: NonNullableFormBuilder,
    private commonService: CommonService,
    private message: NzMessageService
  ) {}

  submitForm(): void {
    if (this.validateForm.valid) {
      this.loginUser();
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  loginUser() {
    this.commonService.login(this.validateForm.value).subscribe({
      next: (response: any) => {},
      error: (error: any) => {
        if (error.status == 401) {
          this.message.error(
            'Username or Password is incorrect, please try again'
          );
        }
        if (error.status == 500) {
          this.message.error(
            'Something went wrong, please try again or try after some time'
          );
        }
        if (error.code == 'ERR_NETWORK') {
          this.message.error(
            'Kindly check you internet connection and try again'
          );
        }
      },
      complete: () => {},
    });
  }
}
