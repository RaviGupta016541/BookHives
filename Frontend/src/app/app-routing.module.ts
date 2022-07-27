import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BooksDashboardComponent } from './Books-dashboard/books-dashboard.component';
import { CartComponent } from './cart/cart.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DetailsComponent } from './details/details.component';
import { AuthGuard } from './employee-login/auth.guard';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { HomeComponent } from './home/home.component';
import { LoginAuthGuard } from './login/login-auth.guard';
import { LoginComponent } from './login/login.component';
import { OrderShowComponent } from './order-show/order-show.component';
import { OrderComponent } from './order/order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { ShippingComponent } from './shipping/shipping.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'dashboard', canActivate:[AuthGuard], component: BooksDashboardComponent },
  { path: '',redirectTo:'home',pathMatch:'full' },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component:ContactFormComponent ,},
  { path: 'Register',component:RegisterComponent},
  { path: 'Login/Register',component:RegisterComponent},
  { path: 'Login',component:LoginComponent },
  { path: 'order',canActivate:[LoginAuthGuard],component:OrderComponent},
  { path: 'cart',canActivate:[LoginAuthGuard],component:CartComponent},
  { path: 'home/details',component:DetailsComponent},
  { path: 'details',component:DetailsComponent},
  { path: 'EmployeeLogin',component:EmployeeLoginComponent},
  { path: 'shipping',canActivate:[LoginAuthGuard],component:ShippingComponent},
  { path: 'showOrder',canActivate:[LoginAuthGuard],component:OrderShowComponent},
  { path: '**',component:PageNotFoundComponent},
  // { path: 'showOrder',component:OrderShowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
