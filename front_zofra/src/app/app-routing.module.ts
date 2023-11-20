import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TableComponent } from './components/table/table.component';
import { TableOtrosDocsComponent } from './components/table-otros-docs/table-otros-docs.component';
import { TablePolizaComponent } from './components/table-poliza/table-poliza.component';
import { TableDocsAdminComponent } from './components/table-docs-admin/table-docs-admin.component';
import { TableUsuariosComponent } from './components/table-usuarios/table-usuarios.component';
import { TableMercaderiaComponent } from './components/table-mercaderia/table-mercaderia.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'mis-documentos', component: TableComponent},
  {path: 'otros-documentos', component: TableOtrosDocsComponent},
  {path: 'poliza', component: TablePolizaComponent},
  {path: 'docs-admin', component: TableDocsAdminComponent},
  {path: 'usuarios', component: TableUsuariosComponent},
  {path: 'mercaderia', component: TableMercaderiaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
