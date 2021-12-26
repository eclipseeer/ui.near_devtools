import { useLayoutEffect, useRef, useReducer } from 'react';
import { useStoreContext } from './StoreProvider';
import { isDepsEqual } from './utils';

const singleSelect = (state: any, ref: any, forceRender: any) => {
  const data = ref.current.selector(state);
  if (Object.is(data, ref.current.data)) return;
  ref.current.data = data;
  forceRender();
};

const multiSelect = (state: any, ref: any, forceRender: any) => {
  let needUpdate = false;

  const slices = ref.current.data.map((slice: any, index: any) => {
    const data = ref.current.selector[index](state);
    if (data !== slice) needUpdate = true;
    return data;
  });

  if (!needUpdate) return;
  ref.current.data = slices;
  forceRender();
};

export const useStoreState = (selector: any, deps: any = []) => {
  const store: any = useStoreContext();
  const [, forceRender] = useReducer((x) => x + 1, 0) as [never, () => void];

  const ref: any = useRef({
    firstRender: true,
    deps: [],
  });

  // We want to avoid rerun all selectors every time when component was updated even
  // if state wasn't changed for this component
  if (ref.current.firstRender || !isDepsEqual(ref.current.deps, deps)) {
    ref.current.deps = deps;
    ref.current.isMulti = Array.isArray(selector);
    ref.current.selector = selector;
    ref.current.data = ref.current.isMulti
      ? selector.map((s: any) => s(store.state.get()))
      : selector(store.state.get());
  }

  useLayoutEffect(
    () =>
      store.state.subscribe((state: any) => {
        ref.current.isMulti
          ? multiSelect(state, ref, forceRender)
          : singleSelect(state, ref, forceRender);
      }),
    [],
  );

  ref.current.firstRender = false;
  return ref.current.data;
};
