type Currency = 'GBP' | 'USD' | 'EUR'

export interface Transaction {
  user_id: string;
  timestamp: string;
  currency: Currency;
  amount: string;
}

export interface UserBalance {
  user_id: string;
  GBP: string;
  USD: string;
  EUR: string;
  lastActivity: string;
}
