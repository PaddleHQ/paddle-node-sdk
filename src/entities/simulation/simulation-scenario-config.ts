import {
  type SimulationSubscriptionCancellationConfig,
  type SimulationSubscriptionCreationConfig,
  type SimulationSubscriptionPauseConfig,
  type SimulationSubscriptionRenewalConfig,
  type SimulationSubscriptionResumeConfig,
  type ISimulationScenarioConfigResponse,
} from '../../types/index.js';
import {
  type EffectiveFromType,
  type CustomerSimulatedAsType,
  type BusinessSimulatedAsType,
  type DiscountSimulatedAsType,
  type PaymentOutcomeType,
  type DunningExhaustedActionType,
} from '../../enums/index.js';

export class SimulationScenarioConfig {
  public readonly subscriptionCancellation: SubscriptionCancellationDetails | null;
  public readonly subscriptionCreation: SubscriptionCreationDetails | null;
  public readonly subscriptionPause: SubscriptionPauseDetails | null;
  public readonly subscriptionRenewal: SubscriptionRenewalDetails | null;
  public readonly subscriptionResume: SubscriptionResumeDetails | null;

  constructor(response: ISimulationScenarioConfigResponse) {
    this.subscriptionCancellation = response.subscription_cancellation
      ? new SubscriptionCancellationDetails(response.subscription_cancellation)
      : null;
    this.subscriptionCreation = response.subscription_creation
      ? new SubscriptionCreationDetails(response.subscription_creation)
      : null;
    this.subscriptionPause = response.subscription_pause
      ? new SubscriptionPauseDetails(response.subscription_pause)
      : null;
    this.subscriptionRenewal = response.subscription_renewal
      ? new SubscriptionRenewalDetails(response.subscription_renewal)
      : null;
    this.subscriptionResume = response.subscription_resume
      ? new SubscriptionResumeDetails(response.subscription_resume)
      : null;
  }
}

export class SubscriptionCancellationDetails {
  public readonly entities?: {
    subscriptionId?: string | null;
  };

  public readonly options?: {
    effectiveFrom?: EffectiveFromType | undefined;
    hasPastDueTransaction?: boolean | undefined;
  };

  constructor(config: SimulationSubscriptionCancellationConfig) {
    if (config.entities) {
      this.entities = {
        subscriptionId: config.entities.subscription_id ?? null,
      };
    }

    if (config.options) {
      this.options = {
        effectiveFrom: config.options.effective_from,
        hasPastDueTransaction: config.options.has_past_due_transaction,
      };
    }
  }
}

export class SubscriptionCreationDetails {
  public readonly entities?: {
    customerId?: string | null;
    addressId?: string | null;
    businessId?: string | null;
    paymentMethodId?: string | null;
    discountId?: string | null;
    transactionId?: string | null;
    items?: Array<{
      priceId: string;
      quantity: number;
    }> | null;
  };

  public readonly options?: {
    customerSimulatedAs?: CustomerSimulatedAsType | undefined;
    businessSimulatedAs?: BusinessSimulatedAsType | undefined;
    discountSimulatedAs?: DiscountSimulatedAsType | undefined;
  };

  constructor(config: SimulationSubscriptionCreationConfig) {
    if (config.entities) {
      this.entities = {
        customerId: 'customer_id' in config.entities ? config.entities.customer_id : null,
        addressId: 'address_id' in config.entities ? config.entities.address_id : null,
        businessId: 'business_id' in config.entities ? config.entities.business_id : null,
        paymentMethodId: 'payment_method_id' in config.entities ? config.entities.payment_method_id : null,
        discountId: 'discount_id' in config.entities ? config.entities.discount_id : null,
        transactionId: 'transaction_id' in config.entities ? config.entities.transaction_id : null,
        items:
          'items' in config.entities && config.entities.items
            ? config.entities.items.map((item) => ({
                priceId: item.price_id,
                quantity: item.quantity,
              }))
            : null,
      };
    }

    if (config.options) {
      this.options = {
        customerSimulatedAs: config.options.customer_simulated_as,
        businessSimulatedAs: config.options.business_simulated_as,
        discountSimulatedAs: config.options.discount_simulated_as,
      };
    }
  }
}

export class SubscriptionPauseDetails {
  public readonly entities?: {
    subscriptionId?: string | null;
  };

  public readonly options?: {
    effectiveFrom?: EffectiveFromType | undefined;
    hasPastDueTransaction?: boolean | undefined;
  };

  constructor(config: SimulationSubscriptionPauseConfig) {
    if (config.entities) {
      this.entities = {
        subscriptionId: config.entities.subscription_id ?? null,
      };
    }

    if (config.options) {
      this.options = {
        effectiveFrom: config.options.effective_from,
        hasPastDueTransaction: config.options.has_past_due_transaction,
      };
    }
  }
}

export class SubscriptionRenewalDetails {
  public readonly entities?: {
    subscriptionId?: string | null;
  };

  public readonly options?: {
    paymentOutcome?: PaymentOutcomeType | undefined;
    dunningExhaustedAction?: DunningExhaustedActionType | undefined;
  };

  constructor(config: SimulationSubscriptionRenewalConfig) {
    if (config.entities) {
      this.entities = {
        subscriptionId: config.entities.subscription_id ?? null,
      };
    }

    if (config.options) {
      this.options = {
        paymentOutcome: config.options.payment_outcome,
        dunningExhaustedAction: config.options.dunning_exhausted_action ?? undefined,
      };
    }
  }
}

export class SubscriptionResumeDetails {
  public readonly entities?: {
    subscriptionId?: string | null;
  };

  public readonly options?: {
    paymentOutcome?: PaymentOutcomeType | undefined;
    dunningExhaustedAction?: DunningExhaustedActionType | undefined;
  };

  constructor(config: SimulationSubscriptionResumeConfig) {
    if (config.entities) {
      this.entities = {
        subscriptionId: config.entities.subscription_id ?? null,
      };
    }

    if (config.options) {
      this.options = {
        paymentOutcome: config.options.payment_outcome,
        dunningExhaustedAction: config.options.dunning_exhausted_action ?? undefined,
      };
    }
  }
}
