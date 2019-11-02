import { Action, createReducer, on } from '@ngrx/store';
import * as TareaActions from '../actions/tarea';
import { Tarea } from '../tarea';

export interface State {
  tareas: Tarea[];
}

export const initialState: State = {
  tareas: []
};

const copiarTareas = (tareas) => (JSON.parse(JSON.stringify(tareas)));


const tareasReducer = createReducer(
  initialState,
  on(TareaActions.agregarTarea, (state, {tarea}) =>{
  	let newState = copiarTareas(state);
  	newState.tareas.unshift(tarea);
  	return newState;
  }),
  on(TareaActions.editarTarea, (state, {tarea}) =>{
  	let newState = copiarTareas(state);
  	newState.tareas = newState.tareas.map( viejaTarea => {
  		if(viejaTarea.id == tarea.id)
  			viejaTarea.name = tarea.name;
  		return viejaTarea;
  	});
  	return newState;
  }),
  on(TareaActions.eliminarTarea, (state, {tarea}) =>{
  	let newState = copiarTareas(state);
  	let index = newState.tareas.findIndex( viejaTarea => (viejaTarea.id == tarea.id));
  	if(index >= 0)
  		newState.tareas.splice(index, 1);
  	return newState;
  }),
  on(TareaActions.limpiarCompletadas, (state) =>{
    let newState = copiarTareas(state);
    newState.tareas = newState.tareas.filter( viejaTarea => !viejaTarea.completado);
    return newState;
  }),
  on(TareaActions.toggleCompletado, (state, {tarea}) =>{
    let newState = copiarTareas(state);
    let index = newState.tareas.findIndex( viejaTarea => (viejaTarea.id == tarea.id));
    if(index >= 0)  
      newState.tareas[index].completado = !newState.tareas[index].completado;
    return newState;
  }),
  on(TareaActions.terminarTarea, (state, {tarea}) =>{
  	let newState = copiarTareas(state);
  	let index = newState.tareas.findIndex( viejaTarea => (viejaTarea.id == tarea.id));
  	if(index >= 0)	
  		newState.tareas[index].completado = true;
  	return newState;
  }),
  on(TareaActions.reiniciarTarea, (state, {tarea}) =>{
  	let newState = copiarTareas(state);
  	let index = newState.tareas.findIndex( viejaTarea => (viejaTarea.id == tarea.id));
  	if(index >= 0)
  		newState.tareas[index].completado = false;
  	return newState;
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return tareasReducer(state, action);
}