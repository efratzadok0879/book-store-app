import { Component } from '@angular/core';
import { FormGroup, FormControl, ValidatorFn,Validators } from '@angular/forms';
import { Global, User } from '../../../../imports';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //----------------PROPERTIRS-------------------
  formGroup: FormGroup;
  obj: typeof Object = Object;
  submitted: boolean = false;
  isExist: boolean = true;

  //----------------CONSTRUCTOR------------------
  constructor() {
    let formGroupConfig = {
      userName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
      userPassword: new FormControl('', [Validators.required,Validators.minLength(5),Validators.maxLength(10)])
    };

    this.formGroup = new FormGroup(formGroupConfig);
  }

  //----------------METHODS-------------------
  submitLogin() {
    this.submitted = true;
    let user: User = JSON.parse(localStorage.getItem(Global.userList)).find(user =>
      user.userName == this.userName.value &&
      user.password == this.userPassword.value);
    if (user)
      localStorage.setItem(Global.currentUser, user.id.toString());
    else
      this.isExist = false;
    console.log(this.formGroup.controls);
  }

  get userName() {
    return this.formGroup.controls["userName"];
  }
  get userPassword() {
    return this.formGroup.controls["userPassword"];
  }
  onChange(){
    this.isExist=true;
  }
}
