import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public user: User = {
    username:'',
    password:''
  }

  constructor(private apis: ApiService) { }

  ngOnInit() {}

  login() {
    this.apis.login(this.user)
    .subscribe((data)=>{
      console.log(data);
    })
  }

}
