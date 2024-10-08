/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { PricingPreviewLineItem } from './pricing-preview-line-item.js';
import { type IPricingPreviewDetailsResponse } from '../../types/index.js';

export class PricingPreviewDetails {
  public readonly lineItems: PricingPreviewLineItem[];

  constructor(details: IPricingPreviewDetailsResponse) {
    this.lineItems = details.line_items.map((line_item) => new PricingPreviewLineItem(line_item));
  }
}
