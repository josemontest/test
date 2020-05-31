import { Injectable } from '@angular/core';
import { HttpClient, HttpXsrfTokenExtractor } from '@angular/common/http';
import {User} from './model/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { 
    
  }

  login(user: User) {
    const url = `${this.API_URL}/login`;
    let formData: FormData = new FormData();
    formData.append('username' , user.username);
    formData.append('password' , user.password);

    return this.http.post(url,formData , {});
  }

}
