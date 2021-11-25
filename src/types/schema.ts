export interface Transaction {
  user_id: string;
  timestamp: string;
  currency: "GBP" | "USD" | "EUR";
  amount: string;
}

export interface UserBalance {
  user_id: string;
  gbp: string;
  usd: string;
  eur: string;
  lastActivity: string;
}
