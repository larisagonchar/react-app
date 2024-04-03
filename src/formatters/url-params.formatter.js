export const formatUrlParams = (params) => {
  let urlParams = {};

  for (let [key, value] of Object.entries(params)) {
    if (value) {
      urlParams[key] = value;
    }
  }

  return urlParams;
}
