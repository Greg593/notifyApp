import { Injectable } from '@angular/core';
import { AuthProvider } from '../auth/auth';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AlertaUserProvider {

  constructor(public http: Http, public authService: AuthProvider) {
  }

  createAlerta(alerta){
 
    return new Promise((resolve, reject) => {
 
      let headers = new Headers();
      headers.append('Authorization', this.authService.token); 
 
      this.http.post('http://localhost:8080/api/useralerts', JSON.stringify(alerta), {headers: headers})
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
 
    });
 
  }


}
