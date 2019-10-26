import { Component, OnInit } from '@angular/core';
import { TAREAS } from '../mock-tareas';

@Component({
  selector: 'app-lista-de-tareas',
  templateUrl: './lista-de-tareas.component.html',
  styleUrls: ['./lista-de-tareas.component.styl']
})
export class ListaDeTareasComponent implements OnInit {

	tareas = TAREAS;

  constructor() { }

  ngOnInit() {
  }

}
