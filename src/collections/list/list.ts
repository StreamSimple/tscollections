import {Collection} from '../collection';
import {Equals} from '../../obj/equals';

export interface List<E extends Equals<E>> extends Collection<E> {
  addAtIndex(index: number, e: E);
  get(index: number): E;
  indexOf(e: E): number;
  lastIndexOf(e: E): number;
  removeAtIndex(e: number): E;
  subList(fromIndex: number, toIndex: number);
}