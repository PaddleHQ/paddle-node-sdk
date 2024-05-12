import { Client } from './internal/api/client.js';
import { Environment, type PaddleOptions } from './internal/index.js';
import {
  AddressesResource,
  AdjustmentsResource,
  BusinessesResource,
  CustomersResource,
  DiscountsResource,
  EventTypesResource,
  NotificationSettingsResource,
  NotificationsResource,
  PricesResource,
  PricingPreviewResource,
  ProductsResource,
  ReportsResource,
  SubscriptionsResource,
  TransactionsResource,
} from './resources/index.js';
import { EventsResource } from './resources/events/index.js';
import { Webhooks } from './notifications/index.js';

export class Paddle {
  private readonly client: Client;
  private readonly defaultPaddleOptions: Partial<PaddleOptions> = {
    environment: Environment.production,
  };

  public products: ProductsResource;
  public prices: PricesResource;
  public transactions: TransactionsResource;
  public adjustments: AdjustmentsResource;
  public customers: CustomersResource;
  public addresses: AddressesResource;
  public businesses: BusinessesResource;
  public discounts: DiscountsResource;
  public subscriptions: SubscriptionsResource;
  public pricingPreview: PricingPreviewResource;
  public events: EventsResource;
  public webhooks: Webhooks;
  public eventTypes: EventTypesResource;
  public notificationSettings: NotificationSettingsResource;
  public notifications: NotificationsResource;
  public reports: ReportsResource;

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
    this.addresses = new AddressesResource(this.client);
    this.businesses = new BusinessesResource(this.client);
    this.discounts = new DiscountsResource(this.client);
    this.subscriptions = new SubscriptionsResource(this.client);
    this.pricingPreview = new PricingPreviewResource(this.client);
    this.events = new EventsResource(this.client);
    this.webhooks = new Webhooks();
    this.eventTypes = new EventTypesResource(this.client);
    this.notificationSettings = new NotificationSettingsResource(this.client);
    this.notifications = new NotificationsResource(this.client);
    this.reports = new ReportsResource(this.client);
  }
}
