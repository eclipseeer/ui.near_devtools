import { getObjectSlice } from './modules/utils';

const setModule = (skeleton: any, location: any, sliceName: any, slice: any, type: string) => {
  const module = getObjectSlice(skeleton[type], location);

  if (module[sliceName] !== undefined)
    throw new Error(`Slice name '${sliceName}' is already used in '${type}.${location.join('.')}'`);

  module[sliceName] = slice[type] ?? {};
};

const mapSlices = (model: any, skeleton: any, location: any) => {
  if (model.slices)
    Object.entries(model.slices).forEach(([sliceName, slice]: any) => {
      setModule(skeleton, location, sliceName, slice, 'state');
      setModule(skeleton, location, sliceName, slice, 'actions');
      setModule(skeleton, location, sliceName, slice, 'effects');
      mapSlices(slice, skeleton, [...location, sliceName]);
    });
};

export const createSkeleton = (model: any) => {
  const skeleton = {
    state: model.state ?? {},
    actions: model.actions ?? {},
    effects: model.effects ?? {},
  };
  mapSlices(model, skeleton, []);
  return skeleton;
};
