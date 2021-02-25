import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {LoginService} from "../_service/login.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    apelido: new FormControl(''),
    senha: new FormControl(''),
  });

  error: string;

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      this.loginService.onLogin(this.form.value).subscribe(res => {
      });
    }
  }

}
