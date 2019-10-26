import { Tarea } from './tarea';

export const TAREAS: Tarea[] = [
{ id: Tarea.uuid(), completado: false, name: "Tarea "+Math.floor(Math.random()*10000), editando: false },
{ id: Tarea.uuid(), completado: false, name: "Tarea "+Math.floor(Math.random()*10000), editando: false }
]