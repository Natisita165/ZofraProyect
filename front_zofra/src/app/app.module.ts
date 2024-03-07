import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog'
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TableComponent } from './components/table/table.component';
import { NavPillsComponent } from './components/nav-pills/nav-pills.component';
import { TableDocsAdminComponent } from './components/table-docs-admin/table-docs-admin.component';
import { TableOtrosDocsComponent } from './components/table-otros-docs/table-otros-docs.component';
import { TablePolizaComponent } from './components/table-poliza/table-poliza.component';
import { TableMercaderiaComponent } from './components/table-mercaderia/table-mercaderia.component';
import { TableUsuariosComponent } from './components/table-usuarios/table-usuarios.component';
import { DeleteAlertComponent } from './components/delete-alert/delete-alert.component';
import { NuevoUsuarioPopUpComponent } from './components/nuevo-usuario-pop-up/nuevo-usuario-pop-up.component';
import { NuevoDocumentoPopUpComponent } from './components/nuevo-documento-pop-up/nuevo-documento-pop-up.component';
import { NuevaPolizaPopUpComponent } from './components/nueva-poliza-pop-up/nueva-poliza-pop-up.component';
import { NuevaMercaderiaPopUpComponent } from './components/nueva-mercaderia-pop-up/nueva-mercaderia-pop-up.component';
import { CambiarPassPopUpComponent } from './components/cambiar-pass-pop-up/cambiar-pass-pop-up.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PuntosControlComponent } from './components/puntos-control/puntos-control.component';
import { EditarMercaderiaPopUpComponent } from './components/editar-mercaderia-pop-up/editar-mercaderia-pop-up.component';
import { ReporteMercaderiaComponent } from './components/reporte-mercaderia/reporte-mercaderia.component';
import { EditarPolizaPopUpComponent } from './components/editar-poliza-pop-up/editar-poliza-pop-up.component';
import { EditarDocumentoPopUpComponent } from './components/editar-documento-pop-up/editar-documento-pop-up.component';
import { EditarUsuarioPopUpComponent } from './components/editar-usuario-pop-up/editar-usuario-pop-up.component';
import { TablaPuntosPopUpComponent } from './components/tabla-puntos-pop-up/tabla-puntos-pop-up.component';
import { UpdateDocumentosPopUpComponent } from './components/update-documentos-pop-up/update-documentos-pop-up.component';
import { UpdateMercaderiaPopUpComponent } from './components/update-mercaderia-pop-up/update-mercaderia-pop-up.component';
import { UpdatePolizaPopUpComponent } from './components/update-poliza-pop-up/update-poliza-pop-up.component';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ToolbarComponent,
    TableComponent,
    NavPillsComponent,
    TableDocsAdminComponent,
    TableOtrosDocsComponent,
    TablePolizaComponent,
    TableMercaderiaComponent,
    TableUsuariosComponent,
    DeleteAlertComponent,
    NuevoUsuarioPopUpComponent,
    NuevoDocumentoPopUpComponent,
    NuevaPolizaPopUpComponent,
    NuevaMercaderiaPopUpComponent,
    CambiarPassPopUpComponent,
    PuntosControlComponent,
    EditarMercaderiaPopUpComponent,
    ReporteMercaderiaComponent,
    EditarPolizaPopUpComponent,
    EditarDocumentoPopUpComponent,
    EditarUsuarioPopUpComponent,
    TablaPuntosPopUpComponent,
    UpdateDocumentosPopUpComponent,
    UpdateMercaderiaPopUpComponent,
    UpdatePolizaPopUpComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
