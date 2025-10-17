export type Money = { currency: string; amount: number };
export type LineItem = { productId: string; name: string; price: Money; qty: number };

export interface PaymentAdapter {
  createCheckoutSession(input: {
    items: LineItem[];
    successUrl: string;
    cancelUrl: string;
    customerEmail?: string;
  }): Promise<{ redirectUrl: string }>;
}

// Later, implement Stripe:
// export class StripeAdapter implements PaymentAdapter { ... }
