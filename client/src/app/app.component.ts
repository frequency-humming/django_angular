import { Component, HostListener } from '@angular/core';
import { AppService } from './app.service';
import { EventListener } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @HostListener('window:beforeunload', ['$event'])
  sendInfo($event: any){
    this._appService.sendInformation(this.Info).subscribe( data => {
      console.log(data);
    });
  }
  
  title = 'client';
  base64textString: any;
  base64 = [];
  Info = {'page':'Landing Page'};
  getPapayasAll = 0;
  makePapayasAll = 0;
  uploadImagesAll = 0;
  
  constructor(private _appService: AppService){ 
    document.addEventListener("click", this.countInteraction)
  }

  countInteraction(handler){
    let temp = handler;
    if(temp == 'getPapayas'){
      this.getPapayasAll += 1
      this.Info['getPapayasClick'] = this.getPapayasAll
      console.log(this.Info)
    } 
    else if(temp == 'makePapayas'){
      this.makePapayasAll += 1
      this.Info['makePapayasClick'] = this.makePapayasAll
      console.log(this.Info)
    }
    else if(temp == 'image'){
      this.uploadImagesAll += 1
      this.Info['uploadImagesClick'] = this.uploadImagesAll
      console.log(this.Info)
    } else {
      let coordinateX = handler.pageX
      let coordinateY = handler.pageY
      let body = document.body
      let html = document.documentElement
      let width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
      let height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      let relativeX = (coordinateX / width).toFixed(2);
      let relativeY = (coordinateY / height).toFixed(2);
      
      console.log(`x: ${relativeX}%, y: ${relativeY}%`)
    }
  }

  getPapayas(){
    this.countInteraction('getPapayas')
    let observable = this._appService.getAll();
    observable.subscribe( data => {
      console.log(data);
    });
  }

  makePapayas(){
    this.countInteraction('makePapayas')
    let pap = {
      'name':'Partei',
      'isRipe': true
    }

    this._appService.create(pap).subscribe( data => {
      console.log(data);
    });
  }
  
  changeImage(event){    
    this.countInteraction('image')    
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
    this._appService.sendImage(this.base64textString).subscribe( data => {
      console.log(data);
    });
  }



}
