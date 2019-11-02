import { Component, OnInit } from '@angular/core';
import { TAREAS } from '../mock-tareas';
import { Tarea } from '../tarea';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as TareaActions from '../actions/tarea';
import * as fromTarea from '../reducers/tarea';
import {ViewChild, AfterViewInit, ElementRef, ChangeDetectorRef} from '@angular/core'
import {MatButtonToggleGroup} from '@angular/material/button-toggle';


@Component({
  selector: 'app-lista-de-tareas',
  templateUrl: './lista-de-tareas.component.html',
  styleUrls: ['./lista-de-tareas.component.styl']
})
export class ListaDeTareasComponent implements OnInit, AfterViewInit {

	tareas: Array<any>;
	tareasTodas: Array<any>;
	tareasPendientes: Array<any>;
	tareasCompletadas: Array<any>;
	initialized: boolean = false;

	@ViewChild("filtroGroup",{static:false}) toggleFiltro: MatButtonToggleGroup;

  constructor(private store: Store<any>, private ref: ChangeDetectorRef) { }

  ngOnInit() {
  	this.store.select('tareasList').subscribe((state => {
  		this.tareasTodas = state.tareas
  		this.tareasPendientes = this.tareasTodas.filter((tarea:Tarea) => !tarea.completado);
  		this.tareasCompletadas = this.tareasTodas.filter((tarea:Tarea) => tarea.completado);
  		if(this.initialized)
  			this.onChangeFiltro(this.toggleFiltro.value)
  	}));
  }

  ngAfterViewInit(){ 
  	setTimeout(()=>{
  		this.initialized = true;
  		this.toggleFiltro.value="pendientes"
  		this.onChangeFiltro(this.toggleFiltro.value)
  		this.ref.detectChanges();
  	}, 300)
  }

  onChangeFiltro(filtro){
  	console.log(filtro);
  	switch (filtro) {
  		case "todas":
  			this.tareas = this.tareasTodas
  			break;

  		case "pendientes":
  			this.tareas = this.tareasPendientes
  			break;

  		case "completadas":
  			this.tareas = this.tareasCompletadas
  			break;
  		
  		default:
  			console.log("no paso filtro")
  			break;
  	}
  }

}
