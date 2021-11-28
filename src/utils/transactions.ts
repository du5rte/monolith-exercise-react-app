import Decimal from 'decimal.js'

import type { Transaction, UserBalance } from '../types/schema'

import { formatNumber } from './numbers'

export function computeUsersBalances(transactions: Transaction[]): UserBalance[] {
  const users = new Map<string, UserBalance>()

  transactions.forEach((transaction) => {
    // Initiate balances if user does not exist 
    if (!users.has(transaction.user_id)) {
      users.set(transaction.user_id, {
        user_id: transaction.user_id,
        GBP: '0',
        USD: '0',
        EUR: '0',
        lastActivity: transaction.timestamp,
      })
    }

    const user = users.get(transaction.user_id)
    
    if (user) {
      // Add to the right user's currency blance
      
      user[transaction.currency] = formatNumber(
        new Decimal(user[transaction.currency]).add(transaction.amount)
      )

      // Overwrite date if latest
      // HACK: JavaScript string comparison is able to do this 
      // but it's better using a library like dayjs or moment
      if (transaction.timestamp > user.lastActivity) {
       user.lastActivity = transaction.timestamp
      }
    }

    return users
  })

  const arr = [...users].map(([_key,obj]) => obj)

  return arr
}