import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get<User>('https://gist.githubusercontent.com/kathcode/9a0b57a3caa34255f9c12b6204d6fe3d/raw/69aba7500957db06d3e2e1fe88a2ada7d163325f/getGreatPerson.json')
  }
}
