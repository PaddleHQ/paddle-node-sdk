/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { Collection } from '../../internal/base/index.js';
import { type ICustomerResponse } from '../../types/index.js';
import { Customer } from './customer.js';

export class CustomerCollection extends Collection<ICustomerResponse, Customer> {
  override fromJson(data: ICustomerResponse): Customer {
    return new Customer(data);
  }
}
