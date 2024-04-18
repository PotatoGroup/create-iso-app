const composeAsync =
  (...fns: Function[]) =>
  (args?: any) =>
    fns.reduceRight(async (pre, cur) => cur(await pre), args);

export default composeAsync;
