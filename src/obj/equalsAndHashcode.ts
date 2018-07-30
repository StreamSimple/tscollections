import {Equals} from './equals';
import {Hashcode} from './hashcode';

export interface EqualsAndHashcode<T> extends Equals<T>, Hashcode {
}