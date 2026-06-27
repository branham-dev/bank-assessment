import { useForm, type SubmitHandler } from 'react-hook-form';
import styles from './BalanceRequestForm.module.css';
import type { Inputs } from '../../types';
import { useFetchBalanceMutation } from '../../api';


const initialValues: Inputs = {
  accountName: 'John Doe',
  phoneNumber: '0707123654',
  transactionReference: "MP90023",
  transactionCode: "BIMM",
  amount: 0,
  narration: "Payment for Order 8923"
};

const BalanceRequestForm = () => {
  const [fetchBalance] = useFetchBalanceMutation();

  const {register, handleSubmit} = useForm<Inputs>({
    defaultValues: initialValues
  });

  const requestBalance: SubmitHandler<Inputs> = async (payload: Inputs) => {
    console.log(payload);
    try {
      const response = await fetchBalance(payload).unwrap();
      console.log('Balance Fetching', response);
    } catch (error) {
      console.error('Balance Fetching', error);
    }
  }

  return (
    <section className={styles.balanceRequest}>
      <h2>Balance Request</h2>
      <form onSubmit={handleSubmit(requestBalance)}>
        <label htmlFor="name">
          <span>Name</span>
          <input type="text" {...register('accountName')}/>
        </label>

        <label htmlFor="phone">
          <span>Phone Number</span>
          <input type="number" {...register('phoneNumber')}/>
        </label>

        <label htmlFor="reference">
          <span>Transaction Reference</span>
          <input type="text" {...register('transactionReference')}/>
        </label>

        <label htmlFor="code">
          <span>Transaction Code</span>
          <input type="text" {...register('transactionCode')}/>
        </label>

        <label htmlFor="amount">
          <span>Amount</span>
          <input type="number" {...register('amount')}/>
        </label>

        <label htmlFor="narration">
          <span>Narration</span>
          <input type="text" {...register('narration')}/>
        </label>

        <button type='submit'>Request</button>
      </form>
    </section>
  )
}

export default BalanceRequestForm
