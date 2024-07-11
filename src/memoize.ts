// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function memoize(fn: any) {
  const cache = new Map();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...args: any) => {
    const key = JSON.stringify(args);
    if (!cache.has(key)) {
      cache.set(key, fn(...args));
    }
    return cache.get(key);
  };
}
