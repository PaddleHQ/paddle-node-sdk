import { Client } from './internal/api/client.js';
import { Environment, LogLevel, type PaddleOptions } from './internal/index.js';
import {
  AddressesResource,
  AdjustmentsResource,
  BusinessesResource,
  CustomerPortalSessionsResource,
  CustomersResource,
  DiscountGroupsResource,
  DiscountsResource,
  EventTypesResource,
  NotificationSettingsResource,
  NotificationsResource,
  PaymentMethodsResource,
  PricesResource,
  PricingPreviewResource,
  ProductsResource,
  ReportsResource,
  SimulationRunEventsResource,
  SimulationRunsResource,
  SimulationsResource,
  SimulationTypesResource,
  SubscriptionsResource,
  TransactionsResource,
} from './resources/index.js';
import { EventsResource } from './resources/events/index.js';
import { Webhooks } from './notifications/index.js';

export class Paddle {
  private readonly client: Client;
  private readonly defaultPaddleOptions: Partial<PaddleOptions> = {
    environment: Environment.production,
    logLevel: LogLevel.verbose, // TODO - Change the default to `error` in next major version
  };

  public products: ProductsResource;
  public prices: PricesResource;
  public transactions: TransactionsResource;
  public adjustments: AdjustmentsResource;
  public customers: CustomersResource;
  public customerPortalSessions: CustomerPortalSessionsResource;
  public addresses: AddressesResource;
  public businesses: BusinessesResource;
  public discounts: DiscountsResource;
  public discountGroups: DiscountGroupsResource;
  public subscriptions: SubscriptionsResource;
  public paymentMethods: PaymentMethodsResource;
  public pricingPreview: PricingPreviewResource;
  public events: EventsResource;
  public webhooks: Webhooks;
  public eventTypes: EventTypesResource;
  public notificationSettings: NotificationSettingsResource;
  public notifications: NotificationsResource;
  public reports: ReportsResource;
  public simulationTypes: SimulationTypesResource;
  public simulations: SimulationsResource;
  public simulationRuns: SimulationRunsResource;
  public simulationRunEvents: SimulationRunEventsResource;

  constructor(apiKey: string, options?: PaddleOptions) {
    this.client = new Client(
      apiKey,
      options ? { ...this.defaultPaddleOptions, ...options } : { ...this.defaultPaddleOptions },
    );

    this.products = new ProductsResource(this.client);
    this.prices = new PricesResource(this.client);
    this.transactions = new TransactionsResource(this.client);
    this.adjustments = new AdjustmentsResource(this.client);
    this.customers = new CustomersResource(this.client);
    this.customerPortalSessions = new CustomerPortalSessionsResource(this.client);
    this.addresses = new AddressesResource(this.client);
    this.businesses = new BusinessesResource(this.client);
    this.discounts = new DiscountsResource(this.client);
    this.discountGroups = new DiscountGroupsResource(this.client);
    this.subscriptions = new SubscriptionsResource(this.client);
    this.paymentMethods = new PaymentMethodsResource(this.client);
    this.pricingPreview = new PricingPreviewResource(this.client);
    this.events = new EventsResource(this.client);
    this.webhooks = new Webhooks();
    this.eventTypes = new EventTypesResource(this.client);
    this.notificationSettings = new NotificationSettingsResource(this.client);
    this.notifications = new NotificationsResource(this.client);
    this.reports = new ReportsResource(this.client);
    this.simulationTypes = new SimulationTypesResource(this.client);
    this.simulations = new SimulationsResource(this.client);
    this.simulationRuns = new SimulationRunsResource(this.client);
    this.simulationRunEvents = new SimulationRunEventsResource(this.client);
  }
}
