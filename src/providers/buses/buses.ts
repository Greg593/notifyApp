import { Injectable } from '@angular/core';
import { AuthProvider } from '../auth/auth';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BusesProvider {

  constructor(public http: Http, public authService: AuthProvider) {
  }

  getBuses(){
 
    return new Promise((resolve, reject) => {
 
      let headers = new Headers();
      headers.append('Authorization', this.authService.token);     
      this.http.get('http://localhost:8080/api/buses', {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
 
  }
 
  createBus(bus){
 
    return new Promise((resolve, reject) => {
 
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', this.authService.token);
 
      this.http.post('http://localhost:8080/api/buses', JSON.stringify(bus), {headers: headers})
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
 
    });
 
  }
 
  deleteBus(id){
 
    return new Promise((resolve, reject) => {
 
        let headers = new Headers();
        headers.append('Authorization', this.authService.token);
 
        this.http.delete('http://localhost:8080/api/buses/' + id, {headers: headers}).subscribe((res) => {
            resolve(res);
        }, (err) => {
            reject(err);
        });   
 
    });
 
  }

}
