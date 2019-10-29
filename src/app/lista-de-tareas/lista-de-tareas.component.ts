import { Component, OnInit } from '@angular/core';
import { TAREAS } from '../mock-tareas';
import { Tarea } from '../tarea';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as TareaActions from '../actions/tarea';
import * as fromTarea from '../reducers/tarea';


@Component({
  selector: 'app-lista-de-tareas',
  templateUrl: './lista-de-tareas.component.html',
  styleUrls: ['./lista-de-tareas.component.styl']
})
export class ListaDeTareasComponent implements OnInit {

	tareas: Array<any>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
  	this.store.select('tareasList').subscribe((state => this.tareas = state.tareas));
  }

}
