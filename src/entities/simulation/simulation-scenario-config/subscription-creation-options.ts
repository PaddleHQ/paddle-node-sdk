import { type SimulationSubscriptionCreationConfig } from '../../../types/index.js';
import {
  type CustomerSimulatedAsType,
  type BusinessSimulatedAsType,
  type DiscountSimulatedAsType,
} from '../../../enums/index.js';

export class SubscriptionCreationOptions {
  public readonly customerSimulatedAs?: CustomerSimulatedAsType | null;
  public readonly businessSimulatedAs?: BusinessSimulatedAsType | null;
  public readonly discountSimulatedAs?: DiscountSimulatedAsType | null;

  constructor(options: SimulationSubscriptionCreationConfig['options']) {
    this.customerSimulatedAs = options?.customer_simulated_as ?? null;
    this.businessSimulatedAs = options?.business_simulated_as ?? null;
    this.discountSimulatedAs = options?.discount_simulated_as ?? null;
  }
}
