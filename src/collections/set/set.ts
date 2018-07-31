import {Collection} from '../collection';
import {EqualsAndHashcode} from '../../obj/equalsAndHashcode';

export interface Set<E extends EqualsAndHashcode<E>> extends Collection<E> {
}