import {List} from './list';
import {Collection} from '../collection';
import {UInt} from 'com.streamsimple.tsnumbers/dist/uint';
import {EqualsAndHashcode} from '../../obj/equalsAndHashcode';
import {copy} from '../../arrays/arrayutils';

export class ArrayList<E extends EqualsAndHashcode<E>> implements List<E> {
  public static readonly DEFAULT_SIZE = 16;

  private data: E[] = new Array(ArrayList.DEFAULT_SIZE);
  private dataSize = 0;

  public constructor() {
  }

  private amortize() {
    let newData = new Array(this.dataSize * 2);
    copy(this.data, 0, newData, 0, this.dataSize);
  }

  public add(e: E): boolean {
    if (this.dataSize === this.data.length) {
      this.amortize();
    }

    this.data[this.dataSize] = e;
    this.dataSize++;
    return true;
  }

  public addAll(otherCollection: Collection<E>): boolean {
    let arr = otherCollection.toArray();
    let changed = false;

    for (let item of arr) {
      changed = changed || this.add(item);
    }

    return changed;
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
    if (index > this.dataSize) {
      throw new Error("Index ouf of bounds.");
    }

    return this.data[index];
  }

  public hashcode(): UInt {
    let hash = new UInt(0);
    let prime = new UInt(31);

    for (let index = 0; index < this.dataSize; index++) {
      hash = hash.mult(prime).add(this.data[index].hashcode());
    }

    return hash;
  }

  public indexOf(e: E): number {
    for (let index = 0; index < this.dataSize; index++) {
      if (e.equals(this.data[index])) {
        return index;
      }
    }

    return -1;
  }

  public isEmpty(): boolean {
    return this.dataSize == 0;
  }

  public lastIndexOf(e: E): number {
    for (let index = this.dataSize - 1; index >= 0; index--) {
      if (e.equals(this.data[index])) {
        return index;
      }
    }

    return -1;
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

  public retainAll(c: Collection<E>): boolean {
    let arr = c.toArray();
    let changed = false;

    for (let index = 0; index < this.dataSize; index++) {
      if (!c.contains(this.data[index])) {
        changed = true;
        this.removeAtIndex(index);
        index--;
      }
    }

    return changed;
  }

  public size(): number {
    return this.dataSize;
  }

  public toArray(): E[] {
    let arr = new Array(this.dataSize);
    copy(this.data, 0, arr, 0, this.dataSize);
    return arr;
  }
}