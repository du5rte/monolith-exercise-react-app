import Decimal from 'decimal.js'
import dayjs from 'dayjs'

import type { Transaction, UserBalance } from '../types/schema'

import { formatNumber } from './numbers'

interface UserBalanceRaw {
  GBP: Decimal
  USD: Decimal
  EUR: Decimal
  lastActivity: string          
}

export function computeUsersBalances(transactions: Transaction[]): UserBalance[] {
  const users = new Map<string, UserBalanceRaw>()

  transactions.forEach((transaction) => {
    // Initiate balances if user does not exist 
    if (!users.has(transaction.user_id)) {
      users.set(transaction.user_id, {
        GBP: new Decimal(0),
        USD: new Decimal(0),
        EUR: new Decimal(0),
        lastActivity: transaction.timestamp,
      })
    }

    const user = users.get(transaction.user_id)
    
    if (user) {
      // Add to the right user's currency blance
      user[transaction.currency] = user[transaction.currency].add(transaction.amount)
      

      // Overwrite date if latest
      // HACK: JavaScript string comparison is able to do this 
      // but it's better using a library like dayjs or moment
      if (transaction.timestamp > user.lastActivity) {
       user.lastActivity = transaction.timestamp
      }
    }

    return users
  })

  const arr = [...users].map(([key, obj]) => ({
    user_id: key,
    gbp: formatNumber(obj.GBP),
    usd: formatNumber(obj.USD),
    eur: formatNumber(obj.EUR),
    lastActivity: dayjs(obj.lastActivity).format('DD-MM-YYYY')
  }))

  return arr
}