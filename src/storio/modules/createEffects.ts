import { mapSkeleton, getPayload, getObjectSlice } from './utils';

const execute = (store: any, effect: any, payload: any, name: any, location: any) =>
  effect({
    payload,
    store: {
      getState: store.state.get,
      getActions: store.actions.get,
      getEffects: store.effects.get,
    },
    slice: {
      getState: () => store.state.getSlice(location),
      getActions: () => store.actions.getSlice(location),
      getEffects: () => store.effects.getSlice(location),
    },
  });

export const createEffects = (store: any, skeleton: any) => {
  const transformer =
    (effect: any, name: any, location: string[]) =>
    (...args: any) =>
      execute(store, effect, getPayload(args), name, location);

  const effects = mapSkeleton(skeleton.effects, transformer);

  const get = () => effects;
  const getSlice = (location: any) => getObjectSlice(effects, location);

  return { get, getSlice };
};
