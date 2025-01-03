/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type IUrlsResponse } from '../../types/index.js';
import { General } from './general.js';
import { CustomerPortalSubscriptionUrl } from './customer-portal-subscription-url.js';

export class Urls {
  public readonly general: General;
  public readonly subscriptions: CustomerPortalSubscriptionUrl[];

  constructor(urlsResponse: IUrlsResponse) {
    this.general = new General(urlsResponse.general);
    this.subscriptions =
      urlsResponse.subscriptions?.map((subscription) => new CustomerPortalSubscriptionUrl(subscription)) ?? [];
  }
}
