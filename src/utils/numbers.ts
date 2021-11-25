import Decimal from 'decimal.js'

export function formatNumber(val: Decimal | number){
    // catches both type cases
    const n = new Decimal(val)
  
    if (n.equals(0)) {
      return '-'
    }
  
    return `${n.gte(0) ? '+' : ''}${n.toString()}`
  }