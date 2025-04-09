import { type SimulationSubscriptionCreationConfig } from '../../../types/index.js';
import { SubscriptionCreationItem } from './subscription-creation-item.js';

export class SubscriptionCreationEntities {
  public readonly customerId?: string | null;
  public readonly addressId?: string | null;
  public readonly businessId?: string | null;
  public readonly paymentMethodId?: string | null;
  public readonly discountId?: string | null;
  public readonly transactionId?: string | null;
  public readonly items?: SubscriptionCreationItem[] | null;

  constructor(entities: SimulationSubscriptionCreationConfig['entities']) {
    this.customerId = entities?.customer_id ?? null;
    this.addressId = entities?.address_id ?? null;
    this.businessId = entities?.business_id ?? null;
    this.paymentMethodId = entities?.payment_method_id ?? null;
    this.discountId = entities?.discount_id ?? null;
    this.transactionId = entities?.transaction_id ?? null;
    this.items = entities?.items?.map((item) => new SubscriptionCreationItem(item)) ?? null;
  }
}
