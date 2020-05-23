import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminmain',
  templateUrl: './adminmain.component.html',
  styleUrls: ['./adminmain.component.css']
})
export class AdminmainComponent implements OnInit {
  house:any;
  room:any;
  tenant:any;

  constructor(private _appService: AppService, private _router: Router) { 
    this.house = {street:"", city:"", zipcode:"", rooms:""},
    this.room = {price:"", available:"", house:""},
    this.tenant = {firstname:"", lastname:"", age:"", phone:"", email:"", job:"", house:"", room:""}
  }

  ngOnInit() {
    
  }

  onSubmitHouse(){
    console.log(this.house)
    this._appService.sendHouse(this.house).subscribe( data => {
      console.log(data);
    });
  }

}
