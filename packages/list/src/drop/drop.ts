import { List } from '../types'
import { Nothing } from '@typed/maybe'
import { curry2 } from '@typed/functions'
import { slice } from '../slice'

/**
 * Drops the first `n` items from a `List`.
 * @name drop<A>(quantity: number, list: List<A>): Array<A>
 */
export const drop: Drop = curry2(__drop)

export type Drop = {
  <A>(quanity: number, list: List<A>): Array<A>
  <A>(quanity: number): (list: List<A>) => Array<A>
}

function __drop<A>(quanity: number, list: List<A>): Array<A> {
  return slice(quanity, Nothing, list)
}
