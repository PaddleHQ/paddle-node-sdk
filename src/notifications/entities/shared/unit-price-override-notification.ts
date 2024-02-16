/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type IUnitPriceOverrideNotificationResponse } from '../../types';
import { MoneyNotification } from '../index';
import { type CountryCode } from '../../../enums';

export class UnitPriceOverrideNotification {
  public readonly countryCodes: CountryCode[];
  public readonly unitPrice: MoneyNotification;

  constructor(unitPriceOverride: IUnitPriceOverrideNotificationResponse) {
    this.countryCodes = unitPriceOverride.country_codes;
    this.unitPrice = new MoneyNotification(unitPriceOverride.unit_price);
  }
}
