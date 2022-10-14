import { AboutUsComponent } from './about-us/about-us.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
      path:"about",
      component: AboutUsComponent
  },
  {
    path:"menus",
    component: MenuComponent
  },
  {
    path:"menus/:menuId",
    component: MenuDetailsComponent
  },
  {
    path:"cart",
    component: OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
