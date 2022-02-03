import { enablePatches, produce } from 'immer';
import { getObjectSlice, getPayload, mapSkeleton } from './utils';

enablePatches(); // TODO enable only if we have a persistent data

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
