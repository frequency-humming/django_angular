import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { HartfordComponent } from './hartford/hartford.component';
import { ManchesterComponent } from './manchester/manchester.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdminmainComponent } from './adminmain/adminmain.component';
import { TenantComponent } from './tenant/tenant.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminhomeComponent,
    HartfordComponent,
    ManchesterComponent,
    HomeComponent,
    AdminmainComponent,
    TenantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
