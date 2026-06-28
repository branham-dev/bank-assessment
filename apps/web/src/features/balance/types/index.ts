export type Inputs = {
  accountName: string;
  phoneNumber: string
  transactionReference: string;
  transactionCode: string;
  amount: number;
  narration: string;
};

export type BalancePayload = Inputs & {
    actualBalance: number;
    availableBalance: number;
}

export type BalanceResponse = {
    success: boolean;
    message: string;
    data: BalancePayload;
}
