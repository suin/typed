import { List } from '../types'
import { Maybe } from '@typed/maybe'
import { curry2 } from '@typed/functions'
import { slice } from '../slice'

/**
 * Drops `n` number of items from the end of a `List`.
 * @name dropLast<A>(quantity: number, list: List<A>): Array<A>
 */
export const dropLast: DropLast = curry2(__dropLast)

export type DropLast = {
  <A>(quanity: number, list: List<A>): Array<A>
  <A>(quanity: number): (list: List<A>) => Array<A>
}

function __dropLast<A>(quanity: number, list: List<A>): Array<A> {
  return slice(0, Maybe.of(list.length - quanity), list)
}
