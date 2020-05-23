import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  user:any;

  constructor(private _appService: AppService, private _router: Router) { 
    this.user = {email:"", password:""}
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.user)
    this._router.navigate(['/admin/main']);
  }


}
