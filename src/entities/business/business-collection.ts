/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type IBusinessResponse } from '../../types/index.js';
import { Collection } from '../../internal/base/index.js';
import { Business } from './business.js';

export class BusinessCollection extends Collection<IBusinessResponse, Business> {
  override fromJson(data: IBusinessResponse): Business {
    return new Business(data);
  }
}
