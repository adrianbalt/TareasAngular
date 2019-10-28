import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea';
import { Store, select } from '@ngrx/store';
import {FormControl} from '@angular/forms';
import * as TareaActions from '../actions/tarea';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.styl']
})
export class AgregarTareaComponent implements OnInit {

	nuevaTarea: FormControl;

  constructor(private store: Store<any>) { 
  	this.nuevaTarea = new FormControl("");
  }

  ngOnInit() {
  }

  onSubmit(){
  	let nombreTarea: string = this.nuevaTarea.value;
  	if(nombreTarea.trim() == "")
  		return;
  	this.store.dispatch(TareaActions.agregarTarea({
  		tarea: { 
	  		id: Tarea.uuid(), 
	  		completado: false, 
	  		name: nombreTarea, 
	  		editando: false 
  		}
  	}));
  	this.nuevaTarea.reset("");

  }

}
