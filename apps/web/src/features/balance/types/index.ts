export type Inputs = {
  accountName: string;
  phoneNumber: string
  transactionReference: string;
  transactionCode: string;
  amount: number;
  narration: string;
};

export type BalanceResponse = Inputs & {
    actualBalance: number;
    availableBalance: number;
}