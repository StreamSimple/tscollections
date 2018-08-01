export interface Equals<T> {
  equals(that: T): boolean;
}

export function equalsFunction<T extends Equals<T>>(a: T, b: T) {
  return a.equals(b);
}