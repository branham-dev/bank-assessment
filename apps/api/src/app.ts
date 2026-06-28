import { Hono } from 'hono';
import balanceRoutes from './modules/balance/balance.route.js';
import { cors } from 'hono/cors';


const app = new Hono();

app.use(
  '*',
  cors({
    origin: 'http://localhost:5175'
  })
)

app.get('/', (c) => {
  return c.text('Hello Bank Assessment!')
});

app.route('/balance', balanceRoutes);

app.onError((error, c) => {
  console.log(error);

  return c.json({success: false, message: 'An error occured'});
});

export default app;