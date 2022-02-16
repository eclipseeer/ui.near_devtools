export const select = ({ payload: environmentId, slice }: any) => {
  slice.current = slice.map[environmentId];
};
