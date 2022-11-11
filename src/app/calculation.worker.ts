/// <reference lib="webworker" />

import { calculate } from './modules/performance/web-workers/calculation/calculation';

addEventListener('message', ({ data }) => {
  const response = { result: calculate(data.value) };
  postMessage(response);
});
