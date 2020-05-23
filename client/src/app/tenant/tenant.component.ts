import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';
import {DomSanitizer} from '@angular/platform-browser';
import { range } from 'rxjs';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.css']
})
export class TenantComponent implements OnInit {

  title = 'client';
  base64textString: any;
  base64 = [];
  pictures:any;
  html_pics = []
  private image : any;
  private readonly imageType : string = 'data:image/PNG;base64,';

  constructor(private _appService: AppService,private _DomSanitizer: DomSanitizer) { 
    this.html_pics = []
  }

  ngOnInit() {
    this.onGetPictures();
  }

  changeImage(event){       
    let files = event.target.files;
    let file = files[0];
    if(files && file){
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
      
    }
  }

  _handleReaderLoaded(readerEvt){
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    //console.log(this.base64textString)
    this.base64.push('data:image/png;base64,' + btoa(readerEvt.target.result));
    this._appService.sendImageTenant(this.base64textString).subscribe( data => {
      console.log(data);
    });
  }

  onGetPictures(){
    this._appService.getImageTenants().subscribe( data => {
      this.pictures = data;
      //let count = Object.keys(this.pictures.picture).length;
      var n = 0;
      for(let i in this.pictures.picture){
        if(this.pictures.picture[n]){
          let ger = this.pictures.picture[n];
          this.image = this._DomSanitizer.bypassSecurityTrustUrl(this.imageType + ger)
          this.html_pics.push(this.image);
          n++;
        }
      }   
      //let ger = this.houses.picture;
      //this.image = this._DomSanitizer.bypassSecurityTrustUrl(this.imageType + ger);
    });
  }

}
