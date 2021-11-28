import Decimal from 'decimal.js'

export function formatNumber(val: number | Decimal) {
  return (val > 0 ? '+' : '') + val
}

export function formatZero(val: number | Decimal | string) {
  // NODE: using a non-strick equality comparison on purpose as the value can be a string
  // eslint-disable-next-line eqeqeq
  return val == 0 ? '-' : val
}