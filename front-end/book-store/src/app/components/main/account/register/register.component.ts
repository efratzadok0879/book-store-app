import { Component } from '@angular/core';
import { FormGroup, ValidatorFn, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User, AuthenticationService, Global } from '../../../../imports';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  //----------------PROPERTIRS-------------------
  registerFormGroup: FormGroup;
  objectHolder: typeof Object = Object;
  isExistUserName: boolean = false;
  isExistPassword: boolean = false;
  image: any;

  //----------------CONSTRUCTOR------------------
  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService, private router: Router) {
    this.registerFormGroup = this.formBuilder.group({
      firstName: ['', this.createValidatorArr("firstName", 2, 15, /^[A-Za-z]+$/)],
      lastName: ['', this.createValidatorArr("lastName", 2, 15, /^[A-Za-z]+$/)],
      userName: ['', this.createValidatorArr("userName", 3, 15, /^[A-Za-z]+$/)],
      password: ['', this.createValidatorArr("password", 5, 10)],
    });
  }

  //----------------METHODS-------------------

  createValidatorArr(cntName: string, min?: number, max?: number, pattern?: RegExp): Array<ValidatorFn> {
    return [
      f => !f.value ? { "val": `${cntName} is required` } : null,
      f => f.value && max && f.value.length > max ? { "val": `${cntName} is max ${max} chars` } : null,
      f => f.value && min && f.value.length < min ? { "val": `${cntName} is min ${min} chars` } : null,
      f => f.value && pattern && !f.value.match(pattern) ? { "val": `${cntName} is contain only english letter` } : null
    ];
  }

  onSubmit() {
    let user: User = this.registerFormGroup.value;
    this.authenticationService.upload(this.image).subscribe(res => {
      console.log(res.newFilename);
      user.imageUrl = res.newFilename;
      this.register(user);
    });
  }
  register(user: User) {
    this.isExistUserName = false;
    this.isExistPassword = false;
    this.authenticationService.register(user).subscribe(
      res => {
        let userId: number = res.userId;
        debugger;
        switch (userId) {
          case -1:
            this.isExistUserName = true;
            break;
          case -2:
            this.isExistPassword = true;
            break;
          default:
            user.id = userId;
            localStorage.setItem(Global.currentUser, JSON.stringify(user));
            this.router.navigate(['bookStore/products']);
            break;
        }
      },
      err => console.log(err));
  }
  getImage(value: any) {
    this.image = value;
  }

  //----------------GETTERS-------------------

  get firstName() {
    return this.registerFormGroup.controls["firstName"];
  }
  get lastName() {
    return this.registerFormGroup.controls["lastName"];
  }
  get userName() {
    return this.registerFormGroup.controls["userName"];
  }
  get password() {
    return this.registerFormGroup.controls["password"];
  }
}
