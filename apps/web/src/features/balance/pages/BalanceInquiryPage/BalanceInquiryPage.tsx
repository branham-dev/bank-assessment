import { BalanceRequestForm } from '../../components';
import styles from './BalanceInquiryPage.module.css';

const BalanceInquiryPage = () => {
  return (
    <main className={styles.page}>
      <h1>Balance Inquiry</h1>
      <BalanceRequestForm/>
    </main>
  )
}

export default BalanceInquiryPage
