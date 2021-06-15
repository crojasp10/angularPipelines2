import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VehiculoModifComponent } from './vehiculo-modif/vehiculo-modif.component';
import { VehiculoCalculosComponent } from './vehiculo-calculos/vehiculo-calculos.component';
import { PokeApiComponent } from './poke-api/poke-api.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TareasComponent } from './tareas/tareas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { CursosComponent } from './cursos/cursos.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';
import { VideosComponentComponent } from './videos-component/videos-component.component'
import {routing} from './modulos/appRoutes';
import { DetalleCursoComponent } from './detalle-curso/detalle-curso.component';
import { FormCursoComponent } from './form-curso/form-curso.component';
import { EjemplosPipesComponent } from './ejemplos-pipes/ejemplos-pipes.component';
import { LetrasPipe } from './pipes/letras.pipe';
import { HomeComponent } from './home/home.component';
import { StorageComponent } from './storage/storage.component'; //Aquí importo las rutas
import {environment} from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';



@NgModule({
  declarations: [
    AppComponent,
    VehiculoModifComponent,
    VehiculoCalculosComponent,
    PokeApiComponent,
    TareasComponent,
    MenuComponent,
    CursosComponent,
    IntegrantesComponent,
    VideosComponentComponent,
    DetalleCursoComponent,
    FormCursoComponent,
    EjemplosPipesComponent,
    LetrasPipe,
    HomeComponent,
    StorageComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing, //Esta es la variable que contiene mis rutas, en la carpeta modulos
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
