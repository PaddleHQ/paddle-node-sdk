export class SubscriptionCreationItem {
  public readonly priceId: string;
  public readonly quantity: number;

  constructor(item: { price_id: string; quantity: number }) {
    this.priceId = item.price_id;
    this.quantity = item.quantity;
  }
}
