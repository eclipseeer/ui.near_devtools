import { useRef } from 'react';
import { useStoreContext } from './StoreProvider';
import { isDepsEqual } from './utils';

export const useStoreActions = (selector: any, deps: any = []) => {
  const store: any = useStoreContext();
  const actions = store.actions.get();

  const ref: any = useRef({
    firstRender: true,
    deps: [],
  });

  if (ref.current.firstRender || !isDepsEqual(ref.current.deps, deps)) {
    ref.current.deps = deps;
    ref.current.actions = Array.isArray(selector)
      ? selector.map((s) => s(actions))
      : selector(actions);
  }

  ref.current.firstRender = false;
  return ref.current.actions;
};
