import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TruckListComponent } from './components/truck/truck-list/truck-list.component';
import { TruckCreateComponent } from './components/truck/truck-create/truck-create.component';
import { WarehouseListComponent } from './components/warehouse/warehouse-list/warehouse-list.component';
import { DriverListComponent } from './components/driver/driver-list/driver-list.component';
import { WarehouseCreateComponent } from './components/warehouse/warehouse-create/warehouse-create.component';
import { DriverCreateComponent } from './components/driver/driver-create/driver-create.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { AuthGuard } from './shared/auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'warehouse', component: WarehouseListComponent  , canActivate: [AuthGuard] },
  { path: 'createwarehouse', component: WarehouseCreateComponent , canActivate: [AuthGuard] },
  { path: 'menu', component: MenuComponent, canActivate: [AuthGuard]  },
  { path: 'truck', component: TruckListComponent, canActivate: [AuthGuard]  },
  { path: 'createtruck', component: TruckCreateComponent, canActivate: [AuthGuard]  },
  { path: 'updatewarehouse/:id', component: WarehouseCreateComponent, canActivate: [AuthGuard]  },
  { path: 'driver', component: DriverListComponent, canActivate: [AuthGuard]  },
  { path: 'createdriver', component: DriverCreateComponent, canActivate: [AuthGuard]  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
