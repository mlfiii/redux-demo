import * as R from 'ramda'

export const objFromListWith = R.curry((fn, list) =>
  R.chain(R.zipObj, R.map(fn))(list)
)
