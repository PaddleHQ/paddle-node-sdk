/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type IMoneyNotificationResponse } from '../../types';
import { type CurrencyCode } from '../../../enums';

export class MoneyNotification {
  public readonly amount: string;
  public readonly currencyCode: CurrencyCode;

  constructor(money: IMoneyNotificationResponse) {
    this.amount = money.amount;
    this.currencyCode = money.currency_code;
  }
}
