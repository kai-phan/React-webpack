declare global {
  export interface GlobalReducerAction {}
}

export type Action<
  // eslint-disable-next-line no-undef
  ReducerAction = GlobalReducerAction,
  Key extends keyof ReducerAction = keyof ReducerAction,
> = Key extends keyof ReducerAction
  ? { type: Key } & ReducerAction[Key]
  : never;

export type GlobalReducer<S> = (state: S, action: Action) => S;
