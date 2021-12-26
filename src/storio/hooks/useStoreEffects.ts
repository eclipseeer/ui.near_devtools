import { useRef } from 'react';
import { useStoreContext } from './StoreProvider';
import { isDepsEqual } from './utils';

export const useStoreEffects = (selector: any, deps: any = []) => {
  const store: any = useStoreContext();
  const effects = store.effects.get();

  const ref: any = useRef({
    firstRender: true,
    deps: [],
  });

  if (ref.current.firstRender || !isDepsEqual(ref.current.deps, deps)) {
    ref.current.deps = deps;
    ref.current.effects = Array.isArray(selector)
      ? selector.map((s) => s(effects))
      : selector(effects);
  }

  ref.current.firstRender = false;
  return ref.current.effects;
};
