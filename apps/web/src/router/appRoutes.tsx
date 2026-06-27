import type { RouteObject } from 'react-router-dom';
import { BalanceInquiryPage } from '../features/balance/pages';


export const appRoutes: RouteObject[] = [
    {
        path: '/',
        element: <BalanceInquiryPage/>
    }
];