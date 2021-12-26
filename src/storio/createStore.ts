import { createSkeleton } from './createSkeleton';
import { createState } from './modules/createState';
import { createActions } from './modules/createActions';
import { createEffects } from './modules/createEffects';

interface StoreModel {
  state?: object;
  persistent?: object;
  actions?: object;
  effects?: object;
  slices?: object;
}

interface Store {
  state: {
    get: () => object;
  };
  actions?: {
    get: () => object;
  };
  effects?: {
    get: () => object;
  }
}

const createBlankStore = () => ({
  state: {
    get: () => ({}),
  },
  actions: {
    get: () => ({}),
  },
  effects: {
    get: () => ({}),
  },
});

export const createStore = (model: StoreModel) => {
  const store: Store = createBlankStore();
  const skeleton = createSkeleton(model);

  store.state = createState(skeleton);
  store.actions = createActions(store, skeleton);
  store.effects = createEffects(store, skeleton);

  return store;
};
