import { createAction, props } from '@ngrx/store';
import { Tarea } from '../tarea';

export const agregarTarea = createAction('Agregar Tarea', props<{tarea: Tarea}>());
export const editarTarea = createAction('Editar Tarea', props<{tarea: Tarea}>());
export const eliminarTarea = createAction('Eliminar Tarea', props<{tarea: Tarea}>());
export const toggleCompletado = createAction('Toggle Tarea', props<{tarea: Tarea}>());
export const terminarTarea = createAction('Terminar Tarea', props<{tarea: Tarea}>());
export const reiniciarTarea = createAction('Reiniciar Tarea', props<{tarea: Tarea}>());