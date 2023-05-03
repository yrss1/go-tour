import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthServiceService} from "../auth-service.service";
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private authService: AuthServiceService, private route: Router) {

  }

  ngOnInit() {

  }

  loginProces() {
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe(result => {
        console.log(result);
        localStorage.setItem('token', result.access)
        alert("Вы успешно authorized");
        this.route.navigateByUrl('/home')
      }, error => {
        if (error.status === 401) {
          alert("Неправильный логин или пароль");
        } else {
          alert("error");
        }
      });
    }
  }
}



