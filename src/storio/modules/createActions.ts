import { produce } from 'immer';
import { mapSkeleton, getPayload, getObjectSlice } from './utils';

const execute = (store: any, action: any, payload: any, name: any, location: any) => {
  const state = produce(store.state.get(), (draft: any) => {
    action({ payload, state: draft, slice: getObjectSlice(draft, location) });
  });
  store.state.update(state);
};

export const createActions = (store: any, skeleton: any) => {
  const transform =
    (action: any, name: any, location: string[]) =>
    (...args: any) =>
      execute(store, action, getPayload(args), name, location);

  const actions = mapSkeleton(skeleton.actions, transform);

  const get = () => actions;
  const getSlice = (location: any) => getObjectSlice(actions, location);

  return { get, getSlice };
};
