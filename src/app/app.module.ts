import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import {NgxPaginationModule} from 'ngx-pagination';
import { MatListModule, MatSelectModule, MatDialogModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantserviceService } from './restaurantservice.service';
import { LoginComponent } from './login/login.component';
import { AuthenticationserviceService } from './authenticationservice.service';
import { RouterserviceService } from './routerservice.service';
import { RegisterComponent } from './register/register.component';
import {MatMenuModule} from '@angular/material/menu';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
 {path:'',component:RestaurantComponent},
  {path: 'login', component:  LoginComponent },
  {path: 'register',component: RegisterComponent},
  {path: 'view',component: ViewComponent},
  { path: 'restaurant', component: RestaurantComponent }];
@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    LoginComponent,
    RegisterComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
   
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MatSelectModule,
    RouterModule.forRoot(routes),
    MatMenuModule
  ],
  providers: [RestaurantserviceService,AuthenticationserviceService,RouterserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
