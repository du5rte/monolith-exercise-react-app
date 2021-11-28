import Decimal from 'decimal.js'

export function formatNumber(val: number | Decimal){
  return (val > 0 ? '+' : '') + val
}