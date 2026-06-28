import type { Context } from 'hono';

export const fetchBalance = async (c: Context) => {
    
    const data = await c.req.json();

    const actualBalance = Number(data.payload.amount) + 500;

    const payload = {
        ...data.payload,
        actualBalance,
        availableBalance: actualBalance > 500
            ? actualBalance - 72
            : actualBalance,
    }

    return c.json({success: true, message: 'Balance fetched successfully', data: payload});

};