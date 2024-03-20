export const mapObjectToSelectInput = (list) => {
  if (!list) return [];
  
  return list.map(listItem => {
    return {
      id: listItem.id,
      value: listItem.value,
      label: listItem.value,
    }
  });
};

export const mapStringsToSelectInput = (list) => {
  if (!list) return [];
  
  return list.map(listItem => {
    return {
      id: listItem,
      value: listItem,
      label: listItem
    }
  });
};