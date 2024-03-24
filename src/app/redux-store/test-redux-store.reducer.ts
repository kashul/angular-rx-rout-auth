import { Action } from "@ngrx/store";
import { All, ChangeName } from "./testreducerActions";


//Note: there are no way to dispath the apecipic reducer. it calls all reducers

export function testReduxStoreReducer(state:string = 'start', action:Action) {

console.log('Reducer called with action:', action);
console.log('Reducer called with state:', state);

switch(action.type) {

case '1':
    return state= 'state 1';
case '2':
    return state= 'state 2';
case '3':
    return state= 'state 3';
default :
    return state='state default';

}


}

export class TestStateObject{
    text:string="default test";
    value:number=0;

}

const newState=(state:TestStateObject,newState:TestStateObject)=>{
    return Object.assign({},state,newState)
}
export function testReduxStoreReducertwo(state:TestStateObject = new TestStateObject, action: any):TestStateObject {
//Note:This state onject immutble. Cant be change.
    console.log('Reducer called with action two:', action);
    console.log('Reducer called with state two:', state);
    
    switch(action.type) {
    
    case ActionType.Add:
        return newState(state,{
            value: state.value+1,
            text: state.text
        });
    case ActionType.Reduce:
        return newState(state,{
            value: state.value-1,
            text: state.text
        });;
    case ActionType.Reset:
        return newState(state,{
            value: 0,
            text: state.text
        });
    case ActionType.ChangeName:
        console.log('Change Name action called', (action instanceof ChangeName));
        return newState(state,{
                value: state.value,
                text: action.payload
            });
    default :
    return newState(state,new TestStateObject);
    
    }
    
    
    }

export enum ActionType{
  Add="Add",
  Reduce="Reduce",
  Reset="Reset",
  ChangeName="ChangeName"
}

 export interface AppState {
    testone:string
    testtwo:TestStateObject
  
  }