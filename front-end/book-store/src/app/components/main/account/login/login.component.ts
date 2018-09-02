import { Component } from '@angular/core';
import { FormGroup, ValidatorFn, FormBuilder } from '@angular/forms';
import { Global, User, AuthenticationService } from '../../../../imports';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //----------------PROPERTIRS-------------------
  loginFormGroup: FormGroup;
  objectHolder: typeof Object = Object;
  submitted: boolean = false;
  isExist: boolean = true;

  //----------------CONSTRUCTOR------------------
  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService) {
    this.loginFormGroup = this.formBuilder.group({
      userName: ['', this.createValidatorArr("userName", 3, 15,/^[A-Za-z]+$/)],
      password: ['', this.createValidatorArr("password", 5, 10)],

    });

  }

  //----------------METHODS-------------------
  createValidatorArr(cntName: string, min: number, max: number, pattern?: RegExp): Array<ValidatorFn> {
    return [
      f => !f.value ? { "val": `${cntName} is required` } : null,
      f => f.value && f.value.length > max ? { "val": `${cntName} is max ${max} chars` } : null,
      f => f.value && f.value.length < min ? { "val": `${cntName} is min ${min} chars` } : null,
      f => f.value && pattern && !f.value.match(pattern) ? { "val": `${cntName} is contain only english letter` } : null

    ];
  }

  onChange() {
    this.isExist = true;
  }

  onSubmit() {
    console.log(this.loginFormGroup.controls);
    this.submitted = true;
    this.authenticationService.login(this.userName.value, this.password.value)
      .subscribe(user => {
        if (user!=null)
          localStorage.setItem(Global.currentUser,JSON.stringify(user));
        else
          this.isExist = false;
      });

  }

  //----------------GETTERS-------------------

  get userName() {
    return this.loginFormGroup.controls["userName"];
  }
  get password() {
    return this.loginFormGroup.controls["password"];
  }
}
