import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2025-01-01',
  appInfo: {
    name: 'Web up',
    version: '0.1.0',
  },
})