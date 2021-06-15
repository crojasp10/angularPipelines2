import { Routes,RouterModule } from "@angular/router";
import {CursosComponent} from '../cursos/cursos.component'
import {VideosComponentComponent} from '../videos-component/videos-component.component'
import {IntegrantesComponent} from '../integrantes/integrantes.component'
import {MenuComponent} from '../menu/menu.component'
import {DetalleCursoComponent} from '../detalle-curso/detalle-curso.component'
import {EjemplosPipesComponent} from '../ejemplos-pipes/ejemplos-pipes.component'
import {StorageComponent} from '../storage/storage.component';

export const appRoutes : Routes = [

    { path: '', component : EjemplosPipesComponent },
    { path: 'Cursos', component : CursosComponent },
    { path: 'Videos', component : VideosComponentComponent },
    { path: 'Integrantes', component : IntegrantesComponent },
    //{ path: 'curso/:id', component : DetalleCursoComponent },
    { path: 'curso', component : DetalleCursoComponent },
    { path:  '**', redirectTo: ''},
    { path: 'storage', component: StorageComponent},

];
//esta constante luego la voy a tener que importar desde app.modelu.ts, para poder usar las rutas
export const routing = RouterModule.forRoot(appRoutes);


