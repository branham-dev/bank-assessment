import type { BalancePayload } from '../../types';
import styles from './BalanceSummary.module.css';

type BalanceSummaryProps = {
    data: BalancePayload;
    onReset: () => void;
}

const BalanceSummary = ({ data, onReset }: BalanceSummaryProps) => {
  return (
    <article className={styles.summary}>
        <section className={styles.section}>
            <h2>Inquiry Details</h2>

            <dl className={styles.details}>
                <dt>Transaction Reference</dt>
                <dd>{data.transactionReference}</dd>
                
                <dt>Phone Number</dt>
                <dd>{data.phoneNumber}</dd>
                
                <dt>Transaction Code</dt>
                <dd>{data.transactionCode}</dd>
            </dl>
        </section>
        <section className={styles.section}>
            <h2>Account</h2>

            <dl className={styles.details}>
                <dt>Account Name</dt>
                <dd>{data.accountName}</dd>
                
                <dt>Actual Balance</dt>
                <dd className={styles.balance}>
                    KES {data.actualBalance.toLocaleString()}
                </dd>
                
                <dt>Available Balance</dt>
                <dd className={styles.balance}>
                    KES {data.availableBalance.toLocaleString()}
                </dd>
            </dl>
        </section>
        <div></div>
        <button
            type='button'
            className={styles.button}
            onClick={onReset}
        >
            Perform Another Inquiry</button>
    </article>
  )
}

export default BalanceSummary
