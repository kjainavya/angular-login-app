import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})


export class LoginPageComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}
  onSubmit() {
    // Logic for form submission, such as authentication, goes here
    if (this.username && this.password) {
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      // alert('Login successful!');
      this.router.navigate(['/welcome'], { queryParams: { username: this.username } });
    } else {
      alert('Please enter your username and password.');
    }
  }
}

