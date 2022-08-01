export type Event =
  | { type: 'LOG_IN'; payload: { user_id: string } }
  | { type: 'SIGN_OUT' };

const sendEvent = <Type extends Event['type']>(
  ...args: Extract<Event, { type: Type }> extends { payload: infer T }
    ? [Type, T]
    : [Type]
): any => {};

sendEvent('LOG_IN', { user_id: '1' });
sendEvent('SIGN_OUT');

// Thunk class
export type Option = {
  onSuccess?: Function;
};

export type UnionArg = [string] | [Option] | [string, Option] | [];

export class Thunk {
  _prefix?: string = '';

  constructor(prefix?: string, config?: any) {
    this._prefix = prefix;
  }

  create(...args: UnionArg) {}
}

const thunk = new Thunk();

thunk.create();
