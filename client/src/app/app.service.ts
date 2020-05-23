import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _http: HttpClient) { }

  getAll(){
    return this._http.get('/papaya')
  }

  create(data){
    return this._http.post('/papaya', data)
  }

  sendImage(file){
    //console.log(file);
    return this._http.post('/papaya/images', file)
  }

  sendImageTenant(file){
    //console.log(file);
    return this._http.post('/tenant/images', file)
  }

  getImageTenants(){
    return this._http.get('/tenant/images')
  }

  sendInformation(info){
    return this._http.post('/papaya/info', info)
  }

  sendHouse(house){
    return this._http.post('/house', house)
  }
  getHouseManchester(){
    return this._http.get('/house')
  }

}
