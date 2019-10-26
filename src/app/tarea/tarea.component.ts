import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.styl']
})
export class TareaComponent implements OnInit {

	tarea: Tarea = {
	    id: Tarea.uuid(),
	    completado: false,
  		name: "Tarea "+Math.floor(Math.random()*10000),
  		editando: false
	  };

  constructor() { }

  ngOnInit() {
  }

}
