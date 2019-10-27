import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea';
import { Store, select } from '@ngrx/store';
import * as TareaActions from '../actions/tarea';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.styl']
})
export class AgregarTareaComponent implements OnInit {

	tarea: Tarea;

  constructor(private store: Store<any>) { 
  	this.tarea = new Tarea();
  }

  ngOnInit() {
  }

  onSubmit(){
  	this.store.dispatch(TareaActions.agregarTarea({
  		tarea: { 
	  		id: Tarea.uuid(), 
	  		completado: false, 
	  		name: this.tarea.name, 
	  		editando: false 
  		}
  	}));
  	this.tarea.name = "";
  }

}
