import { type SimulationSubscriptionCreationConfig } from '../../../types/index.js';
import {
  type CustomerSimulatedAsType,
  type BusinessSimulatedAsType,
  type DiscountSimulatedAsType,
} from '../../../enums/index.js';

export class SubscriptionCreationOptions {
  public readonly customerSimulatedAs?: CustomerSimulatedAsType | undefined;
  public readonly businessSimulatedAs?: BusinessSimulatedAsType | undefined;
  public readonly discountSimulatedAs?: DiscountSimulatedAsType | undefined;

  constructor(options: SimulationSubscriptionCreationConfig['options']) {
    this.customerSimulatedAs = options?.customer_simulated_as;
    this.businessSimulatedAs = options?.business_simulated_as;
    this.discountSimulatedAs = options?.discount_simulated_as;
  }
}
