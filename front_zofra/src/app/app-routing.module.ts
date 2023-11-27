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
import { NuevoUsuarioPopUpComponent } from './components/nuevo-usuario-pop-up/nuevo-usuario-pop-up.component';
import { NuevoDocumentoPopUpComponent } from './components/nuevo-documento-pop-up/nuevo-documento-pop-up.component';
import { NuevaPolizaPopUpComponent } from './components/nueva-poliza-pop-up/nueva-poliza-pop-up.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'mis-documentos', component: TableComponent},
  {path: 'otros-documentos', component: TableOtrosDocsComponent},
  {path: 'poliza', component: TablePolizaComponent},
  {path: 'docs-admin', component: TableDocsAdminComponent},
  {path: 'usuarios', component: TableUsuariosComponent},
  {path: 'mercaderia', component: TableMercaderiaComponent},
  {path: 'crear-nuevo-usuario', component: NuevoUsuarioPopUpComponent},
  {path: 'crear-nuevo-documento', component: NuevoDocumentoPopUpComponent},
  {path: 'crear-nueva-poliza', component: NuevaPolizaPopUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
