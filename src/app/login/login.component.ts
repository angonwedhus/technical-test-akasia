import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: any[] = [];
  formData = {
    username: '',
    password: ''
  };

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getLoginData().subscribe(data => {
      this.loginData = data;
    });
  }

  loginFailed: boolean = false;

  onSubmit() {
    const { username, password } = this.formData;
    const user = this.loginData.find(entry => entry.username === username && entry.password === password);

    if (user) {
      this.router.navigate(['/dashboard']); 
    } else {
      this.loginFailed = true;
    }
  }
}
