/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type IPriceResponse, type ITransactionProrationResponse } from '../index';

export interface ITransactionItemResponse {
  price_id?: string | null;
  price?: IPriceResponse | null;
  quantity: number;
  proration?: ITransactionProrationResponse | null;
}
