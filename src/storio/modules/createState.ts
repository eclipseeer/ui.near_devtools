import { getObjectSlice } from './utils';

const createSubscribeList = () => {
  let subscribers: any[] = [];

  const subscribe = (callback: any) => {
    subscribers.push(callback);
    return () => {
      subscribers = subscribers.filter((cb) => cb !== callback);
    };
  };

  const notify = (state: any) => {
    subscribers.forEach((callback) => callback(state));
  };

  return { subscribe, notify };
};

export const createState = (skeleton: any) => {
  let currentState = skeleton.state;
  const { subscribe, notify } = createSubscribeList();

  const get = () => currentState;
  const getSlice = (location: any) => getObjectSlice(currentState, location);

  const update = (newState: any) => {
    currentState = newState;
    notify(newState);
  };

  return {
    get,
    getSlice,
    update,
    subscribe,
  };
};
