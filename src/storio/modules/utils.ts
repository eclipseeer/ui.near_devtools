export const mapSkeleton = (skeleton: any, transform: any, location: string[] = []) =>
  Object.entries(skeleton).reduce((acc: any, [key, value]) => {
    if (typeof value === 'function') {
      acc[key] = transform(value, key, location);
    } else {
      acc[key] = mapSkeleton(value, transform, [...location, key]);
    }
    return acc;
  }, {});

export const getPayload = (args: any) => (args.length > 1 ? args : args[0]);

export const getObjectSlice = (object: any, location: any[]) =>
  location.reduce((acc, key) => acc[key], object);
