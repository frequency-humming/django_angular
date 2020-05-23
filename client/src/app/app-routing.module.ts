import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { HartfordComponent } from './hartford/hartford.component';
import { ManchesterComponent } from './manchester/manchester.component';
import { HomeComponent } from './home/home.component';
import { AdminmainComponent } from './adminmain/adminmain.component';
import { TenantComponent} from './tenant/tenant.component';

const routes: Routes = [
  {path: 'admin', component: AdminhomeComponent},
  {path: 'admin/main', component: AdminmainComponent},
  {path: 'tenant', component: TenantComponent},
  {path: 'home', component:HomeComponent},
  {path: 'hartford', component: HartfordComponent},
  {path: 'manchester', component: ManchesterComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
