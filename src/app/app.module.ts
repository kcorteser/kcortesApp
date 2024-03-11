import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TruckListComponent } from './components/truck/truck-list/truck-list.component';
import { TruckCreateComponent } from './components/truck/truck-create/truck-create.component';
import { WarehouseCreateComponent } from './components/warehouse/warehouse-create/warehouse-create.component';
import { WarehouseListComponent } from './components/warehouse/warehouse-list/warehouse-list.component';
import { DriverCreateComponent } from './components/driver/driver-create/driver-create.component';
import { DriverListComponent } from './components/driver/driver-list/driver-list.component';
import { MenuComponent } from './shared/components/menu/menu.component';

import { JwtInterceptor } from './shared/interceptors/jwt.interceptors';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TruckListComponent,
    TruckCreateComponent,
    WarehouseCreateComponent,
    WarehouseListComponent,
    DriverCreateComponent,
    DriverListComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatPaginatorModule,
    MatOptionModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
