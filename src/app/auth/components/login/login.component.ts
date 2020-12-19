import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(  private formBuilder: FormBuilder, private router: Router, private authService: AuthService ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  login(event: Event): void {
    event.preventDefault();
    if ( this.form.valid ) {
      const value = this.form.value;
      this.authService.login( value.email, value.password )
        .then( () => this.router.navigate(['/admin']))
        .catch( () => alert('User or password incorrect!!!'));
    }
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get emailField(): AbstractControl {
    return this.form.get('email');
  }

  get passwordField(): AbstractControl {
    return this.form.get('password');
  }
}
