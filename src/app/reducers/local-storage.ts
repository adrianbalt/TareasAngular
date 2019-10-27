import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

// the key for the local storage.
const localStorageKey = '__app_storage__';

function setSavedState(state: any, localStorageKey: string) {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
}
function getSavedState(localStorageKey: string): any {
  return JSON.parse(localStorage.getItem(localStorageKey));
}


export function storageReducer(reducer: ActionReducer<any>): ActionReducer<any> {

  let onInit = true;

  return function(state: any, action: any): any {

    let nextState =  reducer(state, action);

    if (onInit) {
      onInit           = false;
      const savedState = getSavedState(localStorageKey);
      return {...nextState, ...savedState};
    }

    setSavedState(nextState, localStorageKey);
    return nextState;


  };
}