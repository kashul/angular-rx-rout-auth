import { Action } from "@ngrx/store";
import { ActionType } from "./test-redux-store.reducer";


export class Add implements Action {
    type: ActionType=ActionType.Add;
}
export class Reduce implements Action {
    type: ActionType=ActionType.Reduce;
}
export class Reset implements Action {
    type: string=ActionType.Reset;
}

export class ChangeName implements Action {
    type: ActionType=ActionType.ChangeName;
    constructor(public payload: string) {}
}


export type All =Add|Reduce|Reset|ChangeName;
