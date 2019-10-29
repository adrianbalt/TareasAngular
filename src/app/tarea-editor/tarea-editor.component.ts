import { Component, OnInit, Input } from '@angular/core';
import {Tarea} from '../tarea'
import {FormControl} from '@angular/forms'

@Component({
  selector: 'app-tarea-editor',
  templateUrl: './tarea-editor.component.html',
  styleUrls: ['./tarea-editor.component.styl']
})
export class TareaEditorComponent implements OnInit {

	@Input() tarea: Tarea;

  constructor() { 
  }

  ngOnInit() {
  }

}
