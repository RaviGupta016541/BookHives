import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BookService } from './book.service';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from './shared/filter.pipe';
import { BooksDashboardComponent } from './Books-dashboard/books-dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OrderComponent } from './order/order.component';
import { DetailsComponent } from './details/details.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { RegisterService } from './register.service';
import { MycartService } from './mycart.service';
import { ShippingComponent } from './shipping/shipping.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OrderShowComponent } from './order-show/order-show.component';
import { OrderServicesService } from './order-services.service';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    FilterPipe,
    BooksDashboardComponent,
    LoginComponent,
    RegisterComponent,
    OrderComponent,
    ContactFormComponent,
    DetailsComponent,
    EmployeeLoginComponent,
    ShippingComponent,
    HeaderComponent,
    FooterComponent,
    OrderShowComponent,
    CartComponent,
    PageNotFoundComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
  ],
  providers: [BookService,RegisterService,MycartService,OrderServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
