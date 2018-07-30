import {Collection} from '../collection';

export interface List<E> extends Collection<E> {
  addAtIndex(index: number, e: E);
  get(index: number): E;
  indexOf(e: E): number;
  lastIndexOf(e: E): number;
  removeAtIndex(e: number): E;
  subList(fromIndex: number, toIndex: number);
}