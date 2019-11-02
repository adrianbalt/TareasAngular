import { Component, OnInit, Input } from '@angular/core';
import {Tarea} from '../tarea'
import { Store, select } from '@ngrx/store';
import {FormControl} from '@angular/forms'
import {ViewChild, AfterViewInit, ElementRef} from '@angular/core'
import * as TareaActions from '../actions/tarea';

@Component({
  selector: 'app-tarea-editor',
  templateUrl: './tarea-editor.component.html',
  styleUrls: ['./tarea-editor.component.styl']
})
export class TareaEditorComponent implements OnInit, AfterViewInit {

	@Input() tarea: Tarea;

  tareaEdit: Tarea;

  @ViewChild("inputNameTarea",{static:false}) inputNameTarea: ElementRef;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.tareaEdit = Tarea.clone(this.tarea)
    this.tareaEdit.editando = false;
    console.log(this.tareaEdit);  
  }

  ngAfterViewInit(){ }

  onDblClick(){
  	this.tareaEdit.editando = true;
    setTimeout(()=>{
      this.inputNameTarea.nativeElement.focus()
    },10)
  }

  onBlur(){
  	this.tareaEdit.editando = false;
    this.actualizarTarea(this.tareaEdit)
  }

  onClickCheck(){
    this.toggleTareaCompletada(this.tareaEdit)
  }

  onClickDelete(){
    this.eliminarTarea(this.tareaEdit);
  }

  onSubmit(){
    this.tareaEdit.editando = false;
    this.actualizarTarea(this.tareaEdit)
  }

  toggleTareaCompletada(tarea:Tarea){
    this.store.dispatch(TareaActions.toggleCompletado({
      tarea: Tarea.clone(this.tareaEdit)
    }));
  }

  actualizarTarea(tarea:Tarea){
    this.store.dispatch(TareaActions.editarTarea({
      tarea: Tarea.clone(this.tareaEdit)
    }));
  };

  eliminarTarea(tarea:Tarea){
    this.store.dispatch(TareaActions.eliminarTarea({
      tarea: Tarea.clone(this.tareaEdit)
    }));
  };

}
