export function calculate(value: number): string | null {
  const start = Date.now();

  // Loop auntil the required amount of time has passed
  // Imagine this is the compution causing a mjor latency
  while ((Date.now() - start) / 1000 < value);

  return value !== null ? `Some result for value ${value}` : null;
}
