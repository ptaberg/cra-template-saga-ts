export interface SystemState {
    value: number
}

export type TAction = string;

export interface IActionCounter {
    type: TAction;
    count: number;
}

export type TSaga = Iterable<unknown>;