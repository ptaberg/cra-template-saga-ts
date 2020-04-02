export interface SystemState {
    value: number
}

export type TAction = string;

export interface IAction {
    type: TAction;
    payload: any;
}

export type TSaga = Iterable<unknown>;