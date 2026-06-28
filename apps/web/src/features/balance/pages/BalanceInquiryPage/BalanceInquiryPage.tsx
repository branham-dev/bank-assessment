import { useState } from 'react';
import { BalanceRequestForm, BalanceSummary } from '../../components';
import styles from './BalanceInquiryPage.module.css';
import type { BalancePayload } from '../../types';

const BalanceInquiryPage = () => {
  const [balance, setBalance] = useState<BalancePayload | null>(null);
  console.log(balance);
  return (
    <main className={styles.page}>
      <div>
        {
        balance
          ? <h1>Balance Summary</h1>
          : <h1>Balance Inquiry</h1>
      }
      {
        balance
          ? <BalanceSummary data={balance} onReset={() => setBalance(null)}/>
          : <BalanceRequestForm onSuccess={setBalance}/>
      }
      </div>
    </main>
  )
}

export default BalanceInquiryPage
