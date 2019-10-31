import { Component, OnInit, Input } from '@angular/core';
import {Tarea} from '../tarea'
import {FormControl} from '@angular/forms'
import {ViewChild, AfterViewInit, ElementRef} from '@angular/core'

@Component({
  selector: 'app-tarea-editor',
  templateUrl: './tarea-editor.component.html',
  styleUrls: ['./tarea-editor.component.styl']
})
export class TareaEditorComponent implements OnInit, AfterViewInit {

	@Input() tarea: Tarea;

  nameTarea: String;
  completado: boolean;
	editando: boolean = false;

  @ViewChild("inputNameTarea",{static:false}) inputNameTarea: ElementRef;

  constructor() { }

  ngOnInit() {
    this.nameTarea = this.tarea.name;
    this.completado = this.tarea.completado;
  }

  ngAfterViewInit(){}

  onDblClick(){
  	this.editando = true
    setTimeout(()=>{
      this.inputNameTarea.nativeElement.focus()
    },10)
  }

  onBlur(){
  	this.editando = false
  }

  onSubmit(){
    console.log(this.tarea.name)
    this.editando = false;
  }

}
