import { ActionsObservable, Epic } from "redux-observable";
export interface IAction<T extends object = any, M = any> {
    type: string;
    payload?: T;
    meta?: M;
    invoke: () => void;
}
export interface IActionTypes {
    [index: string]: string;
}
export declare type IActionCreator<T extends object = any, M = any> = (payload?: T, meta?: M) => IAction<T, M>;
export interface IActionCreators {
    [index: string]: IActionCreator;
}
export declare type IReducer<S> = (state: S, action: IAction) => S;
export declare type IReducers<S> = {
    [index: string]: IReducer<S>;
} | {};
export declare type IObserveableAction<T extends object = any> = ActionsObservable<IAction<T>> & IAction<T>;
export declare type IActionEpic<T extends object = any> = Epic<IObserveableAction<T>, {}, any>;
export interface ISelectors {
    [index: string]: (rootState: any, props?: any) => any;
}
export interface IService<S> {
    readonly name: string;
    readonly types: IActionTypes | {};
    readonly actions: IActionCreators | {};
    readonly reducer: IReducer<S>;
    readonly epics: IActionEpic[];
    readonly selectors: ISelectors;
    getDefaultState: () => S;
}
export interface IServiceFactory<S = any> {
    new (): IService<S>;
}
