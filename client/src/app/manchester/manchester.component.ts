import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';
import { Router } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-manchester',
  templateUrl: './manchester.component.html',
  styleUrls: ['./manchester.component.css']
})

export class ManchesterComponent implements OnInit {

  houses:any;
  pictures:any;
  private image : any;
  private readonly imageType : string = 'data:image/PNG;base64,';

  constructor(private _appService: AppService, private _router: Router,private _DomSanitizer: DomSanitizer) { 
    this.houses = []
  }

  ngOnInit() {
    this.onGetHouseManchester();
  }

  onGetHouseManchester(){
    this._appService.getHouseManchester().subscribe( data => {
      this.houses = data;
      var n = 0;
      var x = this.houses.houses[n].id;
      for(let i = 1; i <= this.houses.houses.length; i++){
        if(this.houses.picture[x]){
          let ger = this.houses.picture[i];
          this.image = this._DomSanitizer.bypassSecurityTrustUrl(this.imageType + ger)
          this.houses.houses[n]['pictures'] = this.image;
          n++
        }
      }
      //let ger = this.houses.picture;
      //this.image = this._DomSanitizer.bypassSecurityTrustUrl(this.imageType + ger);
    });
  }

}
