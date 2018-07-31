import {List} from './list';
import {Collection} from '../collection';
import {UInt} from 'com.streamsimple.tsnumbers/dist/uint';
import {Equals} from '../../obj/equals';

export class ArrayList<E extends Equals<E>> implements List<E> {
  public static readonly DEFAULT_SIZE = 16;

  private data: E[] = new Array(ArrayList.DEFAULT_SIZE);
  private dataSize = 0;

  public constructor() {
  }

  public add(e: E) {
  }

  public addAll(otherCollection: Collection<E>) {
    let arr = otherCollection.toArray();

    for (let item of arr) {
      this.add(item);
    }
  }

  public addAtIndex(index: number, e: E) {
  }

  public clear() {
    this.data = new Array(ArrayList.DEFAULT_SIZE);
    this.dataSize = 0;
  }

  public contains(e: E): boolean {
    for (let item of this.data) {
      if (item.equals(e)) {
        return true;
      }
    }

    return false;
  }

  public containsAll(c: Collection<E>): boolean {
    let arr = c.toArray();

    for (let item of arr) {
      if (!this.contains(item)) {
        return false;
      }
    }

    return true;
  }

  public equals(that: Collection<E>): boolean {
    let arr = that.toArray();

    if (this.dataSize != this.size()) {
      return false;
    }

    for (let index = 0; index < this.dataSize; index++) {
      if (!this.data[index].equals(arr[index])) {
        return false;
      }
    }

    return true;
  }

  public get(index: number): E {
    return undefined;
  }

  public hashcode(): UInt {
    return undefined;
  }

  public indexOf(e: E): number {
    return 0;
  }

  public isEmpty(): boolean {
    return this.dataSize == 0;
  }

  public lastIndexOf(e: E): number {
    return 0;
  }

  public remove(e: E): boolean {
    let index = this.indexOf(e);

    if (index === -1) {
      return false;
    }

    this.removeAtIndex(index);
    return true;
  }

  public removeAll(c: Collection<E>): boolean {
    let changed = false;

    let arr = c.toArray();

    for (let item of arr) {
      changed = changed || this.remove(item);
    }

    return changed;
  }

  public removeAtIndex(e: number): E {
    return undefined;
  }

  public retainAll(c: Collection<E>) {
  }

  public size(): number {
    return this.dataSize;
  }

  public subList(fromIndex: number, toIndex: number) {
  }

  public toArray(): E[] {
    return undefined;
  }
}