/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type IPriceQuantityNotification } from '../../types/index.js';

export class PriceQuantityNotification {
  public readonly minimum: number;
  public readonly maximum: number;

  constructor(priceQuantity: IPriceQuantityNotification) {
    this.minimum = priceQuantity.minimum;
    this.maximum = priceQuantity.maximum;
  }
}
