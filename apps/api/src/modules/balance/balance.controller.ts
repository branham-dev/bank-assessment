import type { Context } from 'hono';

export const fetchBalance = async (c: Context) => {
    
    const data = await c.req.json();

    const payload = {
        ...data.payload,
        actualBalance: 500,
        availableBalance: 500,
    }

    return c.json({success: true, message: 'Balance fetched successfully', data: payload});

};