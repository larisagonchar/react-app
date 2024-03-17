export const mapListToSelectInput = (list) => {
  if (!list) return [];
  
  return list.map(listItem => {
    return {
      value: listItem,
      label: listItem
    }
  });
};