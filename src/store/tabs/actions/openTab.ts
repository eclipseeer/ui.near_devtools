export const openTab = ({ payload: tabId, slice }: any) => {
  slice.currentTab = slice.map[tabId];
};
