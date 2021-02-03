import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
isValidFormSubmitted = false;
model:Login = {
  inputEmail: '',
  inputPassword: ''
}
emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitLoginForm(form: NgForm) {
    this.isValidFormSubmitted = false;
    if(form.invalid) return;
    this.model = form.value;
    console.log(this.model)
    this.isValidFormSubmitted = true;
    form.resetForm()
    this.router.navigate(['/family-tree-view'])
  }

}
