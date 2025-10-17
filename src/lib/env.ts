export const env = {
  BACKEND_BASE_URL: process.env.BACKEND_BASE_URL,
  BACKEND_API_KEY: process.env.BACKEND_API_KEY,
  STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
} as const;
