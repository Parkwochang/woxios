export function transformPrams(url: URL, params: { [key: string]: string | number }) {
  for (const key in params) {
    url.searchParams.set(key, params[key].toString());
  }
  return;
}

export function measureTime(fn: () => void) {
  const startTime = performance.now();
  fn();
  const endTime = performance.now();
  return `${parseFloat(((endTime * 100 - startTime * 100) / 100).toFixed(3)) / 1000}s`;
}

// ! 좀 더 다듬을 필요 있음 -> 타입 정의 필요
export function mergeOptions(defaultOptions: any, options: any) {

  return { ...defaultOptions, ...options };
}

export function transformBody(body: any) {

  // ! body에 따른 비교에 header 변경 해줘야 하는가?
  // utils.isBuffer(data) ||
  // utils.isStream(data) ||
  // utils.isFile(data) ||
  // utils.isBlob(data)

  if (typeof body === 'object') {
    return JSON.stringify(body);
  }

}