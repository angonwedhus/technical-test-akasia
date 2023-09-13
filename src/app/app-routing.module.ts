import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarangComponent } from './barang/barang.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SupplierComponent } from './supplier/supplier.component';
import { TransaksiComponent } from './transaksi/transaksi.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'barang', component: BarangComponent },
  { path: 'users', component: UsersComponent },
  { path: 'supplier', component: SupplierComponent },
  { path: 'transaksi', component: TransaksiComponent },

  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
