import { api } from '../../../api';
import type { BalanceResponse, Inputs } from '../types';

export const balanceApi = api.injectEndpoints({
    endpoints: (builder) => ({
        fetchBalance: builder.mutation<BalanceResponse, Inputs>({
            query: (payload: Inputs) => ({
                url: '/balance/fetch',
                method: 'POST',
                body: { payload }
            }),
        }),
    }),
});

export const { useFetchBalanceMutation } = balanceApi;