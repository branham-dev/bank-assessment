import * as Controller from './balance.controller.js';
import { Hono } from 'hono';


export const balanceRoutes = new Hono();

balanceRoutes.post('/fetch', Controller.fetchBalance);

export default balanceRoutes;