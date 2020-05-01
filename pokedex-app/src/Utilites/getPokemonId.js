export default (url) => {
  const id = url.match(/(\d+)\/?$/);
  return id[1];
};
