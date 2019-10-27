import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgregarTareaComponent } from './agregar-tarea/agregar-tarea.component';
import { TareaComponent } from './tarea/tarea.component';
import { ListaDeTareasComponent } from './lista-de-tareas/lista-de-tareas.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    AgregarTareaComponent,
    TareaComponent,
    ListaDeTareasComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
